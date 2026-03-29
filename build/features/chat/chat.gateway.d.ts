import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AuthTokenService } from '../../utils/authToken.service';
import { ChatService } from './chat.service';
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly authTokenService;
    private readonly chatService;
    server: Server;
    private onlineUsers;
    constructor(authTokenService: AuthTokenService, chatService: ChatService);
    handleConnection(client: Socket): Promise<void>;
    handleDisconnect(client: Socket): void;
    handleAuthenticate(client: Socket, data: {
        token: string;
    }): Promise<void>;
    handleSendMessage(client: Socket, data: {
        recipient_id: number;
        text: string;
        reply_to_id?: number;
    }): Promise<boolean>;
    handleMarkRead(client: Socket, data: {
        message_id: number;
    }): Promise<void>;
    handleTyping(client: Socket, data: {
        chat_room_id: number;
        recipient_id: number;
    }): void;
    private getKeyByValue;
}
