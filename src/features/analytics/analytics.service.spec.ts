import { Test, TestingModule } from '@nestjs/testing';
import { AnalyticsService } from './analytics.service';
import { PrismaService } from '../../database/prisma.service';

describe('AnalyticsService', () => {
  let service: AnalyticsService;
  let db: jest.Mocked<PrismaService>;

  beforeEach(async () => {
    const mockDb = {
      order: {
        findMany: jest.fn(),
        groupBy: jest.fn(),
        count: jest.fn(),
        aggregate: jest.fn(),
      },
      harvest: {
        findMany: jest.fn(),
        count: jest.fn(),
      },
      user: {
        count: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnalyticsService,
        { provide: PrismaService, useValue: mockDb },
      ],
    }).compile();

    service = module.get<AnalyticsService>(AnalyticsService);
    db = module.get(PrismaService);
  });

  describe('getSalesAnalytics', () => {
    it('should calculate total revenue and orders', async () => {
      const orders = [
        { total_price: 100, harvest: { name: 'Tomatoes', category: 'Vegetables' } },
        { total_price: 200, harvest: { name: 'Carrots', category: 'Vegetables' } },
        { total_price: 150, harvest: { name: 'Mangoes', category: 'Fruits' } },
      ];
      db.order.findMany.mockResolvedValue(orders as any);

      const result = await service.getSalesAnalytics(10);

      expect(result.total_revenue).toBe(450);
      expect(result.total_orders).toBe(3);
    });

    it('should group revenue by category', async () => {
      const orders = [
        { total_price: 100, harvest: { name: 'Tomatoes', category: 'Vegetables' } },
        { total_price: 200, harvest: { name: 'Carrots', category: 'Vegetables' } },
        { total_price: 150, harvest: { name: 'Mangoes', category: 'Fruits' } },
      ];
      db.order.findMany.mockResolvedValue(orders as any);

      const result = await service.getSalesAnalytics(10);

      expect(result.by_category).toEqual({
        Vegetables: { count: 2, revenue: 300 },
        Fruits: { count: 1, revenue: 150 },
      });
    });

    it('should only count completed orders', async () => {
      db.order.findMany.mockResolvedValue([]);

      await service.getSalesAnalytics(10);

      expect(db.order.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({ status: 'completed' }),
        }),
      );
    });

    it('should return zero values when no orders exist', async () => {
      db.order.findMany.mockResolvedValue([]);

      const result = await service.getSalesAnalytics(10);

      expect(result.total_revenue).toBe(0);
      expect(result.total_orders).toBe(0);
      expect(result.by_category).toEqual({});
    });
  });

  describe('getDemandTrends', () => {
    it('should return demand trends with harvest info', async () => {
      db.order.groupBy.mockResolvedValue([
        { harvest_id: 1, _count: { id: 20 }, _sum: { quantity: 500 } },
      ] as any);
      db.harvest.findMany.mockResolvedValue([
        { id: 1, name: 'Tomatoes', category: 'Vegetables', unit: 'kg' },
      ] as any);

      const result = await service.getDemandTrends();

      expect(result).toHaveLength(1);
      expect(result[0].order_count).toBe(20);
      expect(result[0].total_quantity_ordered).toBe(500);
      expect(result[0].harvest).toEqual({ id: 1, name: 'Tomatoes', category: 'Vegetables', unit: 'kg' });
    });

    it('should only include accepted and completed orders', async () => {
      db.order.groupBy.mockResolvedValue([]);
      db.harvest.findMany.mockResolvedValue([]);

      await service.getDemandTrends();

      expect(db.order.groupBy).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { status: { in: ['accepted', 'completed'] } },
        }),
      );
    });
  });

  describe('getPopularProducts', () => {
    it('should return top 10 products with order counts', async () => {
      db.order.groupBy.mockResolvedValue([
        { harvest_id: 1, _count: { id: 100 } },
      ] as any);
      db.harvest.findMany.mockResolvedValue([
        { id: 1, name: 'Tomatoes', harvest_image: [], user: { id: 10, full_name: 'Farmer', location: 'Accra' } },
      ] as any);

      const result = await service.getPopularProducts();

      expect(result).toHaveLength(1);
      expect(result[0].order_count).toBe(100);
    });

    it('should limit to 10 products', async () => {
      db.order.groupBy.mockResolvedValue([]);
      db.harvest.findMany.mockResolvedValue([]);

      await service.getPopularProducts();

      expect(db.order.groupBy).toHaveBeenCalledWith(
        expect.objectContaining({ take: 10 }),
      );
    });
  });

  describe('getPlatformMetrics', () => {
    it('should return comprehensive platform metrics', async () => {
      (db.user.count as jest.Mock)
        .mockResolvedValueOnce(100) // totalUsers
        .mockResolvedValueOnce(60)  // totalFarmers
        .mockResolvedValueOnce(35); // totalWholesalers
      (db.harvest.count as jest.Mock)
        .mockResolvedValueOnce(200) // totalHarvests
        .mockResolvedValueOnce(150); // activeListings
      (db.order.count as jest.Mock)
        .mockResolvedValueOnce(500)  // totalOrders
        .mockResolvedValueOnce(300); // completedOrders
      db.order.aggregate.mockResolvedValue({
        _sum: { total_price: 50000 },
      });

      const result = await service.getPlatformMetrics();

      expect(result).toEqual({
        users: { total: 100, farmers: 60, wholesalers: 35 },
        harvests: { total: 200, active: 150 },
        orders: { total: 500, completed: 300 },
        total_revenue: 50000,
      });
    });

    it('should handle zero revenue', async () => {
      (db.user.count as jest.Mock).mockResolvedValue(0);
      (db.harvest.count as jest.Mock).mockResolvedValue(0);
      (db.order.count as jest.Mock).mockResolvedValue(0);
      db.order.aggregate.mockResolvedValue({ _sum: { total_price: null } });

      const result = await service.getPlatformMetrics();

      expect(result.total_revenue).toBe(0);
    });
  });
});
