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

@WebSocketGateway({ cors: true, namespace: '/calls' })
export class CallGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private onlineUsers = new Map<number, string>();
  private activeCalls = new Map<number, number>(); // callerId -> calleeId

  constructor(private readonly authTokenService: AuthTokenService) {}

  async handleConnection(client: Socket) {
    setTimeout(() => {
      if (!this.getKeyByValue(this.onlineUsers, client.id)) {
        client.disconnect();
      }
    }, 5000);
  }

  handleDisconnect(client: Socket) {
    const userId = this.getKeyByValue(this.onlineUsers, client.id);
    if (userId) {
      // End any active calls involving this user
      this.endCallsForUser(userId);
      this.onlineUsers.delete(userId);
    }
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

  @SubscribeMessage('call_initiate')
  handleCallInitiate(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { target_user_id: number },
  ) {
    const callerId = this.getKeyByValue(this.onlineUsers, client.id);
    if (!callerId) return client.emit('error', { message: 'Not authenticated' });

    const targetSocketId = this.onlineUsers.get(data.target_user_id);
    if (!targetSocketId) {
      return client.emit('call_failed', { message: 'User is offline' });
    }

    this.activeCalls.set(callerId, data.target_user_id);
    this.server.to(targetSocketId).emit('call_incoming', {
      caller_id: callerId,
    });
  }

  @SubscribeMessage('call_accept')
  handleCallAccept(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { caller_id: number },
  ) {
    const calleeId = this.getKeyByValue(this.onlineUsers, client.id);
    if (!calleeId) return;

    const callerSocketId = this.onlineUsers.get(data.caller_id);
    if (callerSocketId) {
      this.server.to(callerSocketId).emit('call_accepted', { callee_id: calleeId });
    }
  }

  @SubscribeMessage('call_reject')
  handleCallReject(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { caller_id: number },
  ) {
    const calleeId = this.getKeyByValue(this.onlineUsers, client.id);
    if (!calleeId) return;

    this.activeCalls.delete(data.caller_id);
    const callerSocketId = this.onlineUsers.get(data.caller_id);
    if (callerSocketId) {
      this.server.to(callerSocketId).emit('call_rejected', { callee_id: calleeId });
    }
  }

  @SubscribeMessage('call_end')
  handleCallEnd(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { target_user_id: number },
  ) {
    const userId = this.getKeyByValue(this.onlineUsers, client.id);
    if (!userId) return;

    this.activeCalls.delete(userId);
    this.activeCalls.delete(data.target_user_id);

    const targetSocketId = this.onlineUsers.get(data.target_user_id);
    if (targetSocketId) {
      this.server.to(targetSocketId).emit('call_ended', { user_id: userId });
    }
  }

  @SubscribeMessage('webrtc_offer')
  handleWebRTCOffer(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { target_user_id: number; sdp: any },
  ) {
    const userId = this.getKeyByValue(this.onlineUsers, client.id);
    if (!userId) return;

    const targetSocketId = this.onlineUsers.get(data.target_user_id);
    if (targetSocketId) {
      this.server.to(targetSocketId).emit('webrtc_offer', {
        user_id: userId,
        sdp: data.sdp,
      });
    }
  }

  @SubscribeMessage('webrtc_answer')
  handleWebRTCAnswer(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { target_user_id: number; sdp: any },
  ) {
    const userId = this.getKeyByValue(this.onlineUsers, client.id);
    if (!userId) return;

    const targetSocketId = this.onlineUsers.get(data.target_user_id);
    if (targetSocketId) {
      this.server.to(targetSocketId).emit('webrtc_answer', {
        user_id: userId,
        sdp: data.sdp,
      });
    }
  }

  @SubscribeMessage('webrtc_ice_candidate')
  handleICECandidate(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { target_user_id: number; candidate: any },
  ) {
    const userId = this.getKeyByValue(this.onlineUsers, client.id);
    if (!userId) return;

    const targetSocketId = this.onlineUsers.get(data.target_user_id);
    if (targetSocketId) {
      this.server.to(targetSocketId).emit('webrtc_ice_candidate', {
        user_id: userId,
        candidate: data.candidate,
      });
    }
  }

  private endCallsForUser(userId: number) {
    // If this user was a caller
    const calleeId = this.activeCalls.get(userId);
    if (calleeId) {
      this.activeCalls.delete(userId);
      const calleeSocketId = this.onlineUsers.get(calleeId);
      if (calleeSocketId) {
        this.server.to(calleeSocketId).emit('call_ended', { user_id: userId });
      }
    }

    // If this user was a callee
    for (const [callerId, cId] of this.activeCalls) {
      if (cId === userId) {
        this.activeCalls.delete(callerId);
        const callerSocketId = this.onlineUsers.get(callerId);
        if (callerSocketId) {
          this.server.to(callerSocketId).emit('call_ended', { user_id: userId });
        }
      }
    }
  }

  private getKeyByValue(map: Map<number, string>, value: string): number | undefined {
    for (const [k, v] of map) {
      if (v === value) return k;
    }
    return undefined;
  }
}
