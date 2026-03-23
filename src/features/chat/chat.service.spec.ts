import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { ChatService } from './chat.service';
import { PrismaService } from '../../database/prisma.service';

describe('ChatService', () => {
  let service: ChatService;
  let db: jest.Mocked<PrismaService>;

  const mockRoom = { id: 1, user1: 5, user2: 10 };

  const mockMessage = {
    id: 1,
    chat_room_id: 1,
    sender_id: 5,
    recipient_id: 10,
    text: 'Hello!',
    read: false,
    received: false,
    reply_to_id: null,
    created_at: new Date(),
  };

  beforeEach(async () => {
    const mockDb = {
      chat_room: {
        findFirst: jest.fn(),
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
      },
      message: {
        findFirst: jest.fn(),
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        count: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChatService,
        { provide: PrismaService, useValue: mockDb },
      ],
    }).compile();

    service = module.get<ChatService>(ChatService);
    db = module.get(PrismaService);
  });

  describe('findOrCreateRoom', () => {
    it('should return existing room', async () => {
      (db.chat_room.findFirst as jest.Mock).mockResolvedValue(mockRoom);

      const result = await service.findOrCreateRoom(5, 10);

      expect(result).toEqual(mockRoom);
      expect(db.chat_room.create).not.toHaveBeenCalled();
    });

    it('should create a new room if none exists', async () => {
      (db.chat_room.findFirst as jest.Mock).mockResolvedValue(null);
      (db.chat_room.create as jest.Mock).mockResolvedValue(mockRoom);

      const result = await service.findOrCreateRoom(5, 10);

      expect(result).toEqual(mockRoom);
      expect(db.chat_room.create).toHaveBeenCalledWith({
        data: { user1: 5, user2: 10 },
      });
    });

    it('should normalize user IDs (smaller first)', async () => {
      (db.chat_room.findFirst as jest.Mock).mockResolvedValue(null);
      (db.chat_room.create as jest.Mock).mockResolvedValue({ id: 1, user1: 5, user2: 10 });

      await service.findOrCreateRoom(10, 5); // reversed order

      expect(db.chat_room.create).toHaveBeenCalledWith({
        data: { user1: 5, user2: 10 }, // normalized
      });
    });

    it('should handle same user IDs', async () => {
      (db.chat_room.findFirst as jest.Mock).mockResolvedValue(null);
      (db.chat_room.create as jest.Mock).mockResolvedValue({ id: 1, user1: 5, user2: 5 });

      await service.findOrCreateRoom(5, 5);

      expect(db.chat_room.create).toHaveBeenCalledWith({
        data: { user1: 5, user2: 5 },
      });
    });
  });

  describe('getUserRooms', () => {
    it('should return rooms with last message and unread count', async () => {
      (db.chat_room.findMany as jest.Mock).mockResolvedValue([
        {
          ...mockRoom,
          user_chat_room_user1Touser: { id: 5, full_name: 'User A', profile: null },
          user_chat_room_user2Touser: { id: 10, full_name: 'User B', profile: null },
        },
      ]);
      db.message.findFirst.mockResolvedValue(mockMessage);
      db.message.count.mockResolvedValue(3);

      const result = await service.getUserRooms(5);

      expect(result).toHaveLength(1);
      expect(result[0].last_message).toEqual(mockMessage);
      expect(result[0].unread_count).toBe(3);
    });

    it('should return empty array if user has no rooms', async () => {
      (db.chat_room.findMany as jest.Mock).mockResolvedValue([]);

      const result = await service.getUserRooms(5);

      expect(result).toEqual([]);
    });
  });

  describe('getRoomMessages', () => {
    it('should return paginated messages in chronological order', async () => {
      (db.chat_room.findUnique as jest.Mock).mockResolvedValue(mockRoom);
      db.message.findMany.mockResolvedValue([mockMessage]);
      db.message.count.mockResolvedValue(1);

      const result = await service.getRoomMessages(1, 5, 1, 50);

      expect(result.messages).toEqual([mockMessage]); // reversed from desc
      expect(result.meta).toEqual({ total: 1, page: 1, limit: 50 });
    });

    it('should throw NotFoundException if room not found', async () => {
      (db.chat_room.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(service.getRoomMessages(999, 5)).rejects.toThrow(NotFoundException);
    });

    it('should throw NotFoundException if user is not in the room', async () => {
      (db.chat_room.findUnique as jest.Mock).mockResolvedValue(mockRoom); // user1:5, user2:10

      await expect(service.getRoomMessages(1, 99)).rejects.toThrow(NotFoundException);
    });

    it('should calculate correct skip for pagination', async () => {
      (db.chat_room.findUnique as jest.Mock).mockResolvedValue(mockRoom);
      db.message.findMany.mockResolvedValue([]);
      db.message.count.mockResolvedValue(0);

      await service.getRoomMessages(1, 5, 3, 20); // page 3, limit 20

      expect(db.message.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          skip: 40, // (3-1) * 20
          take: 20,
        }),
      );
    });
  });

  describe('createMessage', () => {
    it('should create a new message', async () => {
      db.message.create.mockResolvedValue(mockMessage);

      const result = await service.createMessage(1, 5, 10, 'Hello!');

      expect(result).toEqual(mockMessage);
      expect(db.message.create).toHaveBeenCalledWith({
        data: {
          chat_room_id: 1,
          sender_id: 5,
          recipient_id: 10,
          text: 'Hello!',
          reply_to_id: undefined,
        },
        include: expect.any(Object),
      });
    });

    it('should support reply_to_id', async () => {
      db.message.create.mockResolvedValue({ ...mockMessage, reply_to_id: 5 });

      await service.createMessage(1, 5, 10, 'Reply!', 5);

      expect(db.message.create).toHaveBeenCalledWith({
        data: expect.objectContaining({ reply_to_id: 5 }),
        include: expect.any(Object),
      });
    });
  });

  describe('markAsRead', () => {
    it('should mark message as read if recipient', async () => {
      db.message.findUnique.mockResolvedValue(mockMessage); // recipient_id: 10
      db.message.update.mockResolvedValue({ ...mockMessage, read: true });

      const result = await service.markAsRead(1, 10);

      expect(result).toEqual(mockMessage);
      expect(db.message.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: { read: true },
      });
    });

    it('should not mark as read if not the recipient', async () => {
      db.message.findUnique.mockResolvedValue(mockMessage); // recipient_id: 10

      const result = await service.markAsRead(1, 5); // sender, not recipient

      expect(result).toBeUndefined();
      expect(db.message.update).not.toHaveBeenCalled();
    });

    it('should not mark as read if message not found', async () => {
      db.message.findUnique.mockResolvedValue(null);

      const result = await service.markAsRead(999, 10);

      expect(result).toBeUndefined();
      expect(db.message.update).not.toHaveBeenCalled();
    });
  });

  describe('markAsDelivered', () => {
    it('should set received to true', async () => {
      db.message.update.mockResolvedValue({ ...mockMessage, received: true });

      await service.markAsDelivered(1);

      expect(db.message.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: { received: true },
      });
    });
  });
});
