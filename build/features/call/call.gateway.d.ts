import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AuthTokenService } from '../../utils/authToken.service';
export declare class CallGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly authTokenService;
    server: Server;
    private onlineUsers;
    private activeCalls;
    constructor(authTokenService: AuthTokenService);
    handleConnection(client: Socket): Promise<void>;
    handleDisconnect(client: Socket): void;
    handleAuthenticate(client: Socket, data: {
        token: string;
    }): Promise<void>;
    handleCallInitiate(client: Socket, data: {
        target_user_id: number;
    }): boolean;
    handleCallAccept(client: Socket, data: {
        caller_id: number;
    }): void;
    handleCallReject(client: Socket, data: {
        caller_id: number;
    }): void;
    handleCallEnd(client: Socket, data: {
        target_user_id: number;
    }): void;
    handleWebRTCOffer(client: Socket, data: {
        target_user_id: number;
        sdp: any;
    }): void;
    handleWebRTCAnswer(client: Socket, data: {
        target_user_id: number;
        sdp: any;
    }): void;
    handleICECandidate(client: Socket, data: {
        target_user_id: number;
        candidate: any;
    }): void;
    private endCallsForUser;
    private getKeyByValue;
}
