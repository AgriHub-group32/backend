"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let ChatService = class ChatService {
    constructor(db) {
        this.db = db;
    }
    async findOrCreateRoom(user1Id, user2Id) {
        const [smallId, bigId] = user1Id < user2Id ? [user1Id, user2Id] : [user2Id, user1Id];
        const include = {
            user_chat_room_user1Touser: { select: { id: true, full_name: true, profile: true } },
            user_chat_room_user2Touser: { select: { id: true, full_name: true, profile: true } },
        };
        let room = await this.db.chat_room.findFirst({
            where: {
                OR: [
                    { user1: smallId, user2: bigId },
                    { user1: bigId, user2: smallId },
                ],
            },
            include,
        });
        if (!room) {
            room = await this.db.chat_room.create({
                data: { user1: smallId, user2: bigId },
                include,
            });
        }
        return room;
    }
    async getUserRooms(userId) {
        const rooms = await this.db.chat_room.findMany({
            where: {
                OR: [{ user1: userId }, { user2: userId }],
            },
            include: {
                user_chat_room_user1Touser: { select: { id: true, full_name: true, profile: true } },
                user_chat_room_user2Touser: { select: { id: true, full_name: true, profile: true } },
            },
        });
        const roomsWithLastMessage = await Promise.all(rooms.map(async (room) => {
            const lastMessage = await this.db.message.findFirst({
                where: { chat_room_id: room.id },
                orderBy: { created_at: 'desc' },
            });
            const unreadCount = await this.db.message.count({
                where: { chat_room_id: room.id, recipient_id: userId, read: false },
            });
            return { ...room, last_message: lastMessage, unread_count: unreadCount };
        }));
        return roomsWithLastMessage;
    }
    async getRoomMessages(roomId, userId, page = 1, limit = 50) {
        const room = await this.db.chat_room.findUnique({ where: { id: roomId } });
        if (!room)
            throw new common_1.NotFoundException('Chat room not found');
        if (room.user1 !== userId && room.user2 !== userId)
            throw new common_1.NotFoundException('Chat room not found');
        const skip = (page - 1) * limit;
        const [messages, total] = await Promise.all([
            this.db.message.findMany({
                where: { chat_room_id: roomId },
                orderBy: { created_at: 'desc' },
                skip,
                take: limit,
                include: {
                    user_message_sender_idTouser: { select: { id: true, full_name: true, profile: true } },
                },
            }),
            this.db.message.count({ where: { chat_room_id: roomId } }),
        ]);
        return { messages: messages.reverse(), meta: { total, page, limit } };
    }
    async createMessage(chatRoomId, senderId, recipientId, text, replyToId) {
        return this.db.message.create({
            data: {
                chat_room_id: chatRoomId,
                sender_id: senderId,
                recipient_id: recipientId,
                text,
                reply_to_id: replyToId,
            },
            include: {
                user_message_sender_idTouser: { select: { id: true, full_name: true, profile: true } },
            },
        });
    }
    async markAsRead(messageId, userId) {
        const message = await this.db.message.findUnique({ where: { id: messageId } });
        if (!message || message.recipient_id !== userId)
            return;
        await this.db.message.update({
            where: { id: messageId },
            data: { read: true },
        });
        return message;
    }
    async markAsDelivered(messageId) {
        await this.db.message.update({
            where: { id: messageId },
            data: { received: true },
        });
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChatService);
//# sourceMappingURL=chat.service.js.map