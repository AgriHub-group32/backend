import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PrismaService } from '../../database/prisma.service';

describe('PaymentService', () => {
  let service: PaymentService;
  let db: jest.Mocked<PrismaService>;

  const mockOrder = {
    id: 1,
    buyer_id: 20,
    harvest_id: 1,
    quantity: 10,
    unit_price: 5.0,
    total_price: 50.0,
    status: 'accepted',
  };

  const mockPayment = {
    id: 1,
    order_id: 1,
    amount: 50.0,
    method: 'mobile_money',
    status: 'pending',
    transaction_ref: 'uuid-123',
    created_at: new Date(),
  };

  beforeEach(async () => {
    const mockDb = {
      order: {
        findUnique: jest.fn(),
      },
      payment: {
        findUnique: jest.fn(),
        findFirst: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PaymentService,
        { provide: PrismaService, useValue: mockDb },
      ],
    }).compile();

    service = module.get<PaymentService>(PaymentService);
    db = module.get(PrismaService);
  });

  describe('create', () => {
    const createDto = { order_id: 1, method: 'mobile_money' };

    it('should create a payment for an accepted order', async () => {
      db.order.findUnique.mockResolvedValue(mockOrder);
      db.payment.findFirst.mockResolvedValue(null);
      db.payment.create.mockResolvedValue(mockPayment);

      const result = await service.create(20, createDto);

      expect(result.message).toBe('Payment initiated');
      expect(db.payment.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          order_id: 1,
          amount: 50.0,
          method: 'mobile_money',
        }),
      });
    });

    it('should throw NotFoundException if order not found', async () => {
      db.order.findUnique.mockResolvedValue(null);

      await expect(service.create(20, createDto)).rejects.toThrow(NotFoundException);
    });

    it('should throw ForbiddenException if not the buyer', async () => {
      db.order.findUnique.mockResolvedValue(mockOrder); // buyer_id: 20

      await expect(service.create(99, createDto)).rejects.toThrow(ForbiddenException);
    });

    it('should throw BadRequestException if order not accepted', async () => {
      db.order.findUnique.mockResolvedValue({ ...mockOrder, status: 'pending' });

      await expect(service.create(20, createDto)).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException if payment already exists', async () => {
      db.order.findUnique.mockResolvedValue(mockOrder);
      db.payment.findFirst.mockResolvedValue(mockPayment);

      await expect(service.create(20, createDto)).rejects.toThrow(BadRequestException);
    });

    it('should generate a unique transaction_ref', async () => {
      db.order.findUnique.mockResolvedValue(mockOrder);
      db.payment.findFirst.mockResolvedValue(null);
      db.payment.create.mockResolvedValue(mockPayment);

      await service.create(20, createDto);

      const createCall = db.payment.create.mock.calls[0][0];
      expect(createCall.data.transaction_ref).toBeDefined();
      expect(typeof createCall.data.transaction_ref).toBe('string');
    });
  });

  describe('getPayments', () => {
    it('should return payments for the user', async () => {
      db.payment.findMany.mockResolvedValue([mockPayment]);

      const result = await service.getPayments(20);

      expect(result).toEqual([mockPayment]);
      expect(db.payment.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { order: { buyer_id: 20 } },
        }),
      );
    });
  });

  describe('getById', () => {
    it('should return payment details', async () => {
      const paymentWithOrder = {
        ...mockPayment,
        order: {
          ...mockOrder,
          harvest: { id: 1, name: 'Tomatoes' },
          user_order_buyer_idTouser: { id: 20, full_name: 'Buyer' },
        },
      };
      db.payment.findUnique.mockResolvedValue(paymentWithOrder);

      const result = await service.getById(1, 20);

      expect(result).toEqual(paymentWithOrder);
    });

    it('should throw NotFoundException if payment not found', async () => {
      db.payment.findUnique.mockResolvedValue(null);

      await expect(service.getById(999, 20)).rejects.toThrow(NotFoundException);
    });

    // BUG-08: This test documents the broken authorization
    it('BUG: allows any user to view any payment (broken auth)', async () => {
      const paymentWithOrder = {
        ...mockPayment,
        order: {
          ...mockOrder,
          buyer_id: 20,
          harvest: { id: 1, name: 'Tomatoes' },
          user_order_buyer_idTouser: { id: 20, full_name: 'Buyer' },
        },
      };
      db.payment.findUnique.mockResolvedValue(paymentWithOrder);

      // User 99 is neither the buyer nor the farmer - should throw but doesn't
      const result = await service.getById(1, 99);
      expect(result).toBeDefined(); // BUG: should throw ForbiddenException
    });
  });

  describe('confirm', () => {
    it('should confirm a pending payment', async () => {
      db.payment.findUnique.mockResolvedValue(mockPayment);
      db.payment.update.mockResolvedValue({ ...mockPayment, status: 'completed' });

      const result = await service.confirm(1);

      expect(result.message).toBe('Payment confirmed');
      expect(db.payment.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: { status: 'completed' },
      });
    });

    it('should throw NotFoundException if payment not found', async () => {
      db.payment.findUnique.mockResolvedValue(null);

      await expect(service.confirm(999)).rejects.toThrow(NotFoundException);
    });

    it('should throw BadRequestException if payment is not pending', async () => {
      db.payment.findUnique.mockResolvedValue({ ...mockPayment, status: 'completed' });

      await expect(service.confirm(1)).rejects.toThrow(BadRequestException);
    });
  });

  describe('refund', () => {
    it('should refund a completed payment', async () => {
      db.payment.findUnique.mockResolvedValue({ ...mockPayment, status: 'completed' });
      db.payment.update.mockResolvedValue({ ...mockPayment, status: 'refunded' });

      const result = await service.refund(1);

      expect(result.message).toBe('Payment refunded');
    });

    it('should throw BadRequestException if payment is not completed', async () => {
      db.payment.findUnique.mockResolvedValue(mockPayment); // status: 'pending'

      await expect(service.refund(1)).rejects.toThrow(BadRequestException);
    });

    it('should throw NotFoundException if payment not found', async () => {
      db.payment.findUnique.mockResolvedValue(null);

      await expect(service.refund(999)).rejects.toThrow(NotFoundException);
    });
  });
});
