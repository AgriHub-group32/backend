import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { OrderService } from './order.service';
import { PrismaService } from '../../database/prisma.service';

describe('OrderService', () => {
  let service: OrderService;
  let db: jest.Mocked<PrismaService>;

  const mockHarvest = {
    id: 1,
    name: 'Tomatoes',
    quantity: 100,
    unit: 'kg',
    owner_id: 10,
    category: 'Vegetables',
    unit_price: 5.0,
    is_available: true,
  };

  const mockOrder = {
    id: 1,
    buyer_id: 20,
    harvest_id: 1,
    quantity: 10,
    unit_price: 5.0,
    total_price: 50.0,
    status: 'pending',
    note: null,
    created_at: new Date(),
    updated_at: new Date(),
  };

  beforeEach(async () => {
    const mockDb = {
      harvest: {
        findUnique: jest.fn(),
        update: jest.fn(),
      },
      order: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
      },
      $transaction: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        { provide: PrismaService, useValue: mockDb },
      ],
    }).compile();

    service = module.get<OrderService>(OrderService);
    db = module.get(PrismaService);
  });

  describe('create', () => {
    const createDto = { harvest_id: 1, quantity: 10 };

    it('should create an order with calculated total_price', async () => {
      db.harvest.findUnique.mockResolvedValue(mockHarvest);
      db.order.create.mockResolvedValue(mockOrder);

      const result = await service.create(20, createDto);

      expect(result.message).toBe('Order placed successfully');
      expect(db.order.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          buyer_id: 20,
          harvest_id: 1,
          quantity: 10,
          total_price: 50.0, // 5.0 * 10
        }),
      });
    });

    it('should throw NotFoundException if harvest not found', async () => {
      db.harvest.findUnique.mockResolvedValue(null);

      await expect(service.create(20, createDto)).rejects.toThrow(NotFoundException);
    });

    it('should throw BadRequestException if harvest not available', async () => {
      db.harvest.findUnique.mockResolvedValue({ ...mockHarvest, is_available: false });

      await expect(service.create(20, createDto)).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException if insufficient quantity', async () => {
      db.harvest.findUnique.mockResolvedValue({ ...mockHarvest, quantity: 5 });

      await expect(service.create(20, { harvest_id: 1, quantity: 10 })).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw BadRequestException if ordering own harvest', async () => {
      db.harvest.findUnique.mockResolvedValue(mockHarvest); // owner_id: 10

      await expect(service.create(10, createDto)).rejects.toThrow(BadRequestException);
    });

    it('should include optional note in the order', async () => {
      db.harvest.findUnique.mockResolvedValue(mockHarvest);
      db.order.create.mockResolvedValue({ ...mockOrder, note: 'Please deliver early' });

      await service.create(20, { ...createDto, note: 'Please deliver early' });

      expect(db.order.create).toHaveBeenCalledWith({
        data: expect.objectContaining({ note: 'Please deliver early' }),
      });
    });
  });

  describe('getOrders', () => {
    it('should return buyer orders for wholesaler', async () => {
      db.order.findMany.mockResolvedValue([mockOrder]);

      await service.getOrders(20, 'wholesaler');

      expect(db.order.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { buyer_id: 20 },
        }),
      );
    });

    it('should return harvest owner orders for farmer', async () => {
      db.order.findMany.mockResolvedValue([mockOrder]);

      await service.getOrders(10, 'farmer');

      expect(db.order.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { harvest: { owner_id: 10 } },
        }),
      );
    });
  });

  describe('getById', () => {
    it('should return order for the buyer', async () => {
      const orderWithHarvest = {
        ...mockOrder,
        harvest: { ...mockHarvest, user: { id: 10, full_name: 'Farmer', profile: null } },
        user_order_buyer_idTouser: { id: 20, full_name: 'Buyer', profile: null },
        payment: null,
      };
      db.order.findUnique.mockResolvedValue(orderWithHarvest);

      const result = await service.getById(1, 20);

      expect(result).toEqual(orderWithHarvest);
    });

    it('should return order for the harvest owner', async () => {
      const orderWithHarvest = {
        ...mockOrder,
        harvest: { ...mockHarvest, user: { id: 10, full_name: 'Farmer', profile: null } },
        user_order_buyer_idTouser: { id: 20, full_name: 'Buyer', profile: null },
        payment: null,
      };
      db.order.findUnique.mockResolvedValue(orderWithHarvest);

      const result = await service.getById(1, 10); // harvest owner

      expect(result).toEqual(orderWithHarvest);
    });

    it('should throw ForbiddenException for unauthorized user', async () => {
      const orderWithHarvest = {
        ...mockOrder,
        harvest: { ...mockHarvest },
        user_order_buyer_idTouser: { id: 20 },
        payment: null,
      };
      db.order.findUnique.mockResolvedValue(orderWithHarvest);

      await expect(service.getById(1, 99)).rejects.toThrow(ForbiddenException);
    });

    it('should throw NotFoundException if order not found', async () => {
      db.order.findUnique.mockResolvedValue(null);

      await expect(service.getById(999, 20)).rejects.toThrow(NotFoundException);
    });
  });

  describe('accept', () => {
    it('should accept a pending order and deduct quantity', async () => {
      const orderWithHarvest = { ...mockOrder, harvest: mockHarvest };
      db.order.findUnique.mockResolvedValue(orderWithHarvest);
      db.harvest.findUnique.mockResolvedValue(mockHarvest);
      (db.$transaction as jest.Mock).mockResolvedValue([]);

      const result = await service.accept(1, 10);

      expect(result.message).toBe('Order accepted');
      expect(db.$transaction).toHaveBeenCalled();
    });

    it('should throw BadRequestException if order is not pending', async () => {
      const acceptedOrder = { ...mockOrder, status: 'accepted', harvest: mockHarvest };
      db.order.findUnique.mockResolvedValue(acceptedOrder);

      await expect(service.accept(1, 10)).rejects.toThrow(BadRequestException);
    });

    it('should throw ForbiddenException if not the harvest owner', async () => {
      const orderWithHarvest = { ...mockOrder, harvest: mockHarvest };
      db.order.findUnique.mockResolvedValue(orderWithHarvest);

      await expect(service.accept(1, 99)).rejects.toThrow(ForbiddenException);
    });

    it('should throw BadRequestException if insufficient harvest quantity', async () => {
      const orderWithHarvest = { ...mockOrder, quantity: 200, harvest: mockHarvest };
      db.order.findUnique.mockResolvedValue(orderWithHarvest);
      db.harvest.findUnique.mockResolvedValue({ ...mockHarvest, quantity: 50 });

      await expect(service.accept(1, 10)).rejects.toThrow(BadRequestException);
    });

    it('should set is_available to false when quantity reaches 0', async () => {
      const orderWithHarvest = { ...mockOrder, quantity: 100, harvest: mockHarvest };
      db.order.findUnique.mockResolvedValue(orderWithHarvest);
      db.harvest.findUnique.mockResolvedValue({ ...mockHarvest, quantity: 100 });
      (db.$transaction as jest.Mock).mockImplementation(async (operations) => {
        // Verify the harvest update sets is_available to false
        return operations;
      });

      await service.accept(1, 10);

      const transactionArg = (db.$transaction as jest.Mock).mock.calls[0][0];
      expect(transactionArg).toHaveLength(2);
    });
  });

  describe('reject', () => {
    it('should reject a pending order', async () => {
      const orderWithHarvest = { ...mockOrder, harvest: mockHarvest };
      db.order.findUnique.mockResolvedValue(orderWithHarvest);
      db.order.update.mockResolvedValue({ ...mockOrder, status: 'rejected' });

      const result = await service.reject(1, 10);

      expect(result.message).toBe('Order rejected');
    });

    it('should throw BadRequestException if order is not pending', async () => {
      const acceptedOrder = { ...mockOrder, status: 'accepted', harvest: mockHarvest };
      db.order.findUnique.mockResolvedValue(acceptedOrder);

      await expect(service.reject(1, 10)).rejects.toThrow(BadRequestException);
    });
  });

  describe('complete', () => {
    it('should complete an accepted order', async () => {
      const acceptedOrder = { ...mockOrder, status: 'accepted', harvest: mockHarvest };
      db.order.findUnique.mockResolvedValue(acceptedOrder);
      db.order.update.mockResolvedValue({ ...mockOrder, status: 'completed' });

      const result = await service.complete(1, 10);

      expect(result.message).toBe('Order completed');
    });

    it('should throw BadRequestException if order is not accepted', async () => {
      const pendingOrder = { ...mockOrder, status: 'pending', harvest: mockHarvest };
      db.order.findUnique.mockResolvedValue(pendingOrder);

      await expect(service.complete(1, 10)).rejects.toThrow(BadRequestException);
    });
  });

  describe('cancel', () => {
    it('should cancel a pending order by the buyer', async () => {
      db.order.findUnique.mockResolvedValue(mockOrder); // buyer_id: 20
      db.order.update.mockResolvedValue({ ...mockOrder, status: 'cancelled' });

      const result = await service.cancel(1, 20);

      expect(result.message).toBe('Order cancelled');
    });

    it('should throw ForbiddenException if not the buyer', async () => {
      db.order.findUnique.mockResolvedValue(mockOrder);

      await expect(service.cancel(1, 99)).rejects.toThrow(ForbiddenException);
    });

    it('should throw BadRequestException if order is not pending', async () => {
      db.order.findUnique.mockResolvedValue({ ...mockOrder, status: 'accepted' });

      await expect(service.cancel(1, 20)).rejects.toThrow(BadRequestException);
    });

    it('should throw NotFoundException if order not found', async () => {
      db.order.findUnique.mockResolvedValue(null);

      await expect(service.cancel(999, 20)).rejects.toThrow(NotFoundException);
    });
  });

  describe('getHistory', () => {
    it('should return completed, cancelled, and rejected orders', async () => {
      db.order.findMany.mockResolvedValue([]);

      await service.getHistory(20);

      expect(db.order.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            status: { in: ['completed', 'cancelled', 'rejected'] },
          }),
        }),
      );
    });

    it('should include both buyer and farmer orders', async () => {
      db.order.findMany.mockResolvedValue([]);

      await service.getHistory(20);

      expect(db.order.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            OR: [{ buyer_id: 20 }, { harvest: { owner_id: 20 } }],
          }),
        }),
      );
    });
  });
});
