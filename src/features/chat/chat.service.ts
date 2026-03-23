import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ChatService {
  constructor(private readonly db: PrismaService) {}

  async findOrCreateRoom(user1Id: number, user2Id: number) {
    const [smallId, bigId] = user1Id < user2Id ? [user1Id, user2Id] : [user2Id, user1Id];

    let room = await this.db.chat_room.findFirst({
      where: {
        OR: [
          { user1: smallId, user2: bigId },
          { user1: bigId, user2: smallId },
        ],
      },
    });

    if (!room) {
      room = await this.db.chat_room.create({
        data: { user1: smallId, user2: bigId },
      });
    }

    return room;
  }

  async getUserRooms(userId: number) {
    const rooms = await this.db.chat_room.findMany({
      where: {
        OR: [{ user1: userId }, { user2: userId }],
      },
      include: {
        user_chat_room_user1Touser: { select: { id: true, full_name: true, profile: true } },
        user_chat_room_user2Touser: { select: { id: true, full_name: true, profile: true } },
      },
    });

    // Add last message to each room
    const roomsWithLastMessage = await Promise.all(
      rooms.map(async (room) => {
        const lastMessage = await this.db.message.findFirst({
          where: { chat_room_id: room.id },
          orderBy: { created_at: 'desc' },
        });
        const unreadCount = await this.db.message.count({
          where: { chat_room_id: room.id, recipient_id: userId, read: false },
        });
        return { ...room, last_message: lastMessage, unread_count: unreadCount };
      }),
    );

    return roomsWithLastMessage;
  }

  async getRoomMessages(roomId: number, userId: number, page: number = 1, limit: number = 50) {
    const room = await this.db.chat_room.findUnique({ where: { id: roomId } });
    if (!room) throw new NotFoundException('Chat room not found');
    if (room.user1 !== userId && room.user2 !== userId)
      throw new NotFoundException('Chat room not found');

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

  async createMessage(
    chatRoomId: number,
    senderId: number,
    recipientId: number,
    text: string,
    replyToId?: number,
  ) {
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

  async markAsRead(messageId: number, userId: number) {
    const message = await this.db.message.findUnique({ where: { id: messageId } });
    if (!message || message.recipient_id !== userId) return;

    await this.db.message.update({
      where: { id: messageId },
      data: { read: true },
    });
    return message;
  }

  async markAsDelivered(messageId: number) {
    await this.db.message.update({
      where: { id: messageId },
      data: { received: true },
    });
  }
}
