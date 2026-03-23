import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { AdminService } from './admin.service';
import { PrismaService } from '../../database/prisma.service';

describe('AdminService', () => {
  let service: AdminService;
  let db: jest.Mocked<PrismaService>;

  const mockUser = {
    id: 1,
    full_name: 'John',
    email: 'john@example.com',
    type: 'farmer',
    is_verified: false,
    is_active: true,
    created_at: new Date(),
  };

  const mockHarvest = {
    id: 1,
    name: 'Tomatoes',
    owner_id: 1,
  };

  const mockOrder = {
    id: 1,
    buyer_id: 2,
    harvest_id: 1,
    status: 'pending',
  };

  beforeEach(async () => {
    const mockDb = {
      user: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        count: jest.fn(),
        update: jest.fn(),
      },
      harvest: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        count: jest.fn(),
        delete: jest.fn(),
      },
      harvest_image: {
        deleteMany: jest.fn(),
      },
      order: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        count: jest.fn(),
        update: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminService,
        { provide: PrismaService, useValue: mockDb },
      ],
    }).compile();

    service = module.get<AdminService>(AdminService);
    db = module.get(PrismaService);
  });

  describe('getUsers', () => {
    it('should return paginated users', async () => {
      db.user.findMany.mockResolvedValue([mockUser] as any);
      db.user.count.mockResolvedValue(1);

      const result = await service.getUsers(1, 20);

      expect(result.data).toEqual([mockUser]);
      expect(result.meta).toEqual({
        total: 1,
        page: 1,
        limit: 20,
        totalPages: 1,
      });
    });

    it('should filter by user type', async () => {
      db.user.findMany.mockResolvedValue([]);
      db.user.count.mockResolvedValue(0);

      await service.getUsers(1, 20, 'farmer');

      expect(db.user.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({ type: 'farmer' }),
        }),
      );
    });

    it('should filter by active status', async () => {
      db.user.findMany.mockResolvedValue([]);
      db.user.count.mockResolvedValue(0);

      await service.getUsers(1, 20, undefined, true);

      expect(db.user.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({ is_active: true }),
        }),
      );
    });

    it('should calculate pagination correctly', async () => {
      db.user.findMany.mockResolvedValue([]);
      db.user.count.mockResolvedValue(50);

      const result = await service.getUsers(3, 10);

      expect(db.user.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ skip: 20, take: 10 }),
      );
      expect(result.meta.totalPages).toBe(5);
    });
  });

  describe('verifyUser', () => {
    it('should verify an unverified user', async () => {
      db.user.findUnique.mockResolvedValue(mockUser as any);
      db.user.update.mockResolvedValue({ ...mockUser, is_verified: true } as any);

      const result = await service.verifyUser(1);

      expect(result.message).toBe('User verified successfully');
      expect(db.user.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: { is_verified: true },
      });
    });

    it('should throw NotFoundException if user not found', async () => {
      db.user.findUnique.mockResolvedValue(null);

      await expect(service.verifyUser(999)).rejects.toThrow(NotFoundException);
    });

    it('should throw BadRequestException if already verified', async () => {
      db.user.findUnique.mockResolvedValue({ ...mockUser, is_verified: true } as any);

      await expect(service.verifyUser(1)).rejects.toThrow(BadRequestException);
    });
  });

  describe('deactivateUser', () => {
    it('should deactivate a user', async () => {
      db.user.findUnique.mockResolvedValue(mockUser as any);
      db.user.update.mockResolvedValue({ ...mockUser, is_active: false } as any);

      const result = await service.deactivateUser(1);

      expect(result.message).toBe('User deactivated');
    });

    it('should throw NotFoundException if user not found', async () => {
      db.user.findUnique.mockResolvedValue(null);

      await expect(service.deactivateUser(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('getHarvests', () => {
    it('should return paginated harvests', async () => {
      db.harvest.findMany.mockResolvedValue([mockHarvest] as any);
      db.harvest.count.mockResolvedValue(1);

      const result = await service.getHarvests(1, 20);

      expect(result.data).toEqual([mockHarvest]);
      expect(result.meta.total).toBe(1);
    });
  });

  describe('removeHarvest', () => {
    it('should delete harvest and its images', async () => {
      db.harvest.findUnique.mockResolvedValue(mockHarvest as any);
      (db.harvest_image.deleteMany as jest.Mock).mockResolvedValue({ count: 2 });
      db.harvest.delete.mockResolvedValue(mockHarvest as any);

      const result = await service.removeHarvest(1);

      expect(result.message).toBe('Harvest removed');
      expect(db.harvest_image.deleteMany).toHaveBeenCalledWith({ where: { harvest_id: 1 } });
    });

    it('should throw NotFoundException if harvest not found', async () => {
      db.harvest.findUnique.mockResolvedValue(null);

      await expect(service.removeHarvest(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('getOrders', () => {
    it('should return paginated orders', async () => {
      db.order.findMany.mockResolvedValue([mockOrder] as any);
      db.order.count.mockResolvedValue(1);

      const result = await service.getOrders(1, 20);

      expect(result.data).toEqual([mockOrder]);
    });

    it('should filter by status', async () => {
      db.order.findMany.mockResolvedValue([]);
      db.order.count.mockResolvedValue(0);

      await service.getOrders(1, 20, 'pending');

      expect(db.order.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({ status: 'pending' }),
        }),
      );
    });
  });

  describe('resolveDispute', () => {
    it('should mark order as completed', async () => {
      db.order.findUnique.mockResolvedValue(mockOrder as any);
      db.order.update.mockResolvedValue({ ...mockOrder, status: 'completed' } as any);

      const result = await service.resolveDispute(1);

      expect(result.message).toBe('Dispute resolved, order marked as completed');
    });

    it('should throw NotFoundException if order not found', async () => {
      db.order.findUnique.mockResolvedValue(null);

      await expect(service.resolveDispute(999)).rejects.toThrow(NotFoundException);
    });

    // BUG-16: This test documents the missing status validation
    it('BUG: allows resolving already cancelled orders', async () => {
      const cancelledOrder = { ...mockOrder, status: 'cancelled' };
      db.order.findUnique.mockResolvedValue(cancelledOrder as any);
      db.order.update.mockResolvedValue({ ...cancelledOrder, status: 'completed' } as any);

      // This should throw but doesn't - BUG-16
      const result = await service.resolveDispute(1);
      expect(result.message).toBe('Dispute resolved, order marked as completed');
    });
  });
});
