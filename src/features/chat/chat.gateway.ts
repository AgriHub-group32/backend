import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AuthTokenService } from '../../utils/authToken.service';
import { ChatService } from './chat.service';

@WebSocketGateway({ cors: true, namespace: '/chat' })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  // Map userId -> socketId
  private onlineUsers = new Map<number, string>();

  constructor(
    private readonly authTokenService: AuthTokenService,
    private readonly chatService: ChatService,
  ) {}

  async handleConnection(client: Socket) {
    // Client must authenticate within 5 seconds or get disconnected
    setTimeout(() => {
      if (!this.getKeyByValue(this.onlineUsers, client.id)) {
        client.disconnect();
      }
    }, 5000);
  }

  handleDisconnect(client: Socket) {
    const userId = this.getKeyByValue(this.onlineUsers, client.id);
    if (userId) this.onlineUsers.delete(userId);
  }

  @SubscribeMessage('authenticate')
  async handleAuthenticate(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { token: string },
  ) {
    try {
      const userId = await this.authTokenService.verifyToken(data.token);
      this.onlineUsers.set(userId, client.id);
      client.emit('authenticated', { userId });
    } catch {
      client.emit('error', { message: 'Authentication failed' });
      client.disconnect();
    }
  }

  @SubscribeMessage('send_message')
  async handleSendMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { recipient_id: number; text: string; reply_to_id?: number },
  ) {
    const senderId = this.getKeyByValue(this.onlineUsers, client.id);
    if (!senderId) return client.emit('error', { message: 'Not authenticated' });

    const room = await this.chatService.findOrCreateRoom(senderId, data.recipient_id);
    const message = await this.chatService.createMessage(
      room.id,
      senderId,
      data.recipient_id,
      data.text,
      data.reply_to_id,
    );

    // Send to recipient if online
    const recipientSocketId = this.onlineUsers.get(data.recipient_id);
    if (recipientSocketId) {
      this.server.to(recipientSocketId).emit('new_message', message);
      await this.chatService.markAsDelivered(message.id);
      client.emit('message_delivered', { message_id: message.id });
    }

    // Confirm to sender
    client.emit('message_sent', message);
  }

  @SubscribeMessage('mark_read')
  async handleMarkRead(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { message_id: number },
  ) {
    const userId = this.getKeyByValue(this.onlineUsers, client.id);
    if (!userId) return;

    const message = await this.chatService.markAsRead(data.message_id, userId);
    if (message) {
      const senderSocketId = this.onlineUsers.get(message.sender_id);
      if (senderSocketId) {
        this.server.to(senderSocketId).emit('message_read', { message_id: data.message_id });
      }
    }
  }

  @SubscribeMessage('typing')
  handleTyping(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { chat_room_id: number; recipient_id: number },
  ) {
    const userId = this.getKeyByValue(this.onlineUsers, client.id);
    if (!userId) return;

    const recipientSocketId = this.onlineUsers.get(data.recipient_id);
    if (recipientSocketId) {
      this.server.to(recipientSocketId).emit('user_typing', {
        chat_room_id: data.chat_room_id,
        user_id: userId,
      });
    }
  }

  private getKeyByValue(map: Map<number, string>, value: string): number | undefined {
    for (const [k, v] of map) {
      if (v === value) return k;
    }
    return undefined;
  }
}
