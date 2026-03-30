import { PrismaService } from '../../database/prisma.service';
export declare class ChatService {
    private readonly db;
    constructor(db: PrismaService);
    findOrCreateRoom(user1Id: number, user2Id: number): Promise<{
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
    getUserRooms(userId: number): Promise<{
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
    getRoomMessages(roomId: number, userId: number, page?: number, limit?: number): Promise<{
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
    createMessage(chatRoomId: number, senderId: number, recipientId: number, text: string, replyToId?: number): Promise<{
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
    }>;
    markAsRead(messageId: number, userId: number): Promise<{
        id: number;
        created_at: Date | null;
        chat_room_id: number;
        sender_id: number;
        recipient_id: number;
        text: string;
        read: boolean;
        received: boolean;
        reply_to_id: number | null;
    }>;
    markAsDelivered(messageId: number): Promise<void>;
}
