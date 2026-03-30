import { ChatService } from './chat.service';
import type { user } from '../../generated/prisma/index';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    getRooms(user: user): Promise<{
        last_message: {
            id: number;
            created_at: Date | null;
            chat_room_id: number;
            sender_id: number;
            recipient_id: number;
            text: string;
            read: boolean;
            received: boolean;
            reply_to_id: number | null;
        };
        unread_count: number;
        user_chat_room_user1Touser: {
            id: number;
            full_name: string;
            profile: string;
        };
        user_chat_room_user2Touser: {
            id: number;
            full_name: string;
            profile: string;
        };
        id: number;
        user1: number;
        user2: number;
        created_at: Date | null;
    }[]>;
    createRoom(user: user, otherUserId: number): Promise<{
        user_chat_room_user1Touser: {
            id: number;
            full_name: string;
            profile: string;
        };
        user_chat_room_user2Touser: {
            id: number;
            full_name: string;
            profile: string;
        };
    } & {
        id: number;
        user1: number;
        user2: number;
        created_at: Date | null;
    }>;
    getMessages(roomId: number, user: user, page?: string, limit?: string): Promise<{
        messages: ({
            user_message_sender_idTouser: {
                id: number;
                full_name: string;
                profile: string;
            };
        } & {
            id: number;
            created_at: Date | null;
            chat_room_id: number;
            sender_id: number;
            recipient_id: number;
            text: string;
            read: boolean;
            received: boolean;
            reply_to_id: number | null;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
        };
    }>;
}
