import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';
import { PrismaService } from '../../database/prisma.service';

describe('MarketplaceService', () => {
  let service: MarketplaceService;
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
    harvest_image: [],
    user: { id: 10, full_name: 'Farmer', location: 'Accra', profile: null },
  };

  beforeEach(async () => {
    const mockDb = {
      harvest: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        count: jest.fn(),
      },
      order: {
        groupBy: jest.fn(),
      },
      review: {
        aggregate: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MarketplaceService,
        { provide: PrismaService, useValue: mockDb },
      ],
    }).compile();

    service = module.get<MarketplaceService>(MarketplaceService);
    db = module.get(PrismaService);
  });

  describe('search', () => {
    it('should return paginated results with default params', async () => {
      db.harvest.findMany.mockResolvedValue([mockHarvest]);
      db.harvest.count.mockResolvedValue(1);

      const result = await service.search({});

      expect(result.data).toEqual([mockHarvest]);
      expect(result.meta).toEqual({
        total: 1,
        page: 1,
        limit: 20,
        totalPages: 1,
      });
    });

    it('should filter by search term', async () => {
      db.harvest.findMany.mockResolvedValue([]);
      db.harvest.count.mockResolvedValue(0);

      await service.search({ search: 'tomato' });

      expect(db.harvest.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            name: { contains: 'tomato' },
            is_available: true,
          }),
        }),
      );
    });

    it('should filter by category', async () => {
      db.harvest.findMany.mockResolvedValue([]);
      db.harvest.count.mockResolvedValue(0);

      await service.search({ category: 'Vegetables' });

      expect(db.harvest.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({ category: 'Vegetables' }),
        }),
      );
    });

    it('should filter by price range', async () => {
      db.harvest.findMany.mockResolvedValue([]);
      db.harvest.count.mockResolvedValue(0);

      await service.search({ minPrice: 2, maxPrice: 10 });

      expect(db.harvest.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            unit_price: { gte: 2, lte: 10 },
          }),
        }),
      );
    });

    it('should filter by minimum quantity', async () => {
      db.harvest.findMany.mockResolvedValue([]);
      db.harvest.count.mockResolvedValue(0);

      await service.search({ minQuantity: 50 });

      expect(db.harvest.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            quantity: { gte: 50 },
          }),
        }),
      );
    });

    it('should sort by price ascending', async () => {
      db.harvest.findMany.mockResolvedValue([]);
      db.harvest.count.mockResolvedValue(0);

      await service.search({ sortBy: 'price', sortOrder: 'asc' });

      expect(db.harvest.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          orderBy: { unit_price: 'asc' },
        }),
      );
    });

    it('should sort by date descending by default', async () => {
      db.harvest.findMany.mockResolvedValue([]);
      db.harvest.count.mockResolvedValue(0);

      await service.search({});

      expect(db.harvest.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          orderBy: { created_at: 'desc' },
        }),
      );
    });

    it('should calculate correct pagination', async () => {
      db.harvest.findMany.mockResolvedValue([]);
      db.harvest.count.mockResolvedValue(100);

      const result = await service.search({ page: 3, limit: 10 });

      expect(db.harvest.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          skip: 20,
          take: 10,
        }),
      );
      expect(result.meta.totalPages).toBe(10);
    });

    it('should only show available harvests', async () => {
      db.harvest.findMany.mockResolvedValue([]);
      db.harvest.count.mockResolvedValue(0);

      await service.search({});

      expect(db.harvest.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({ is_available: true }),
        }),
      );
    });
  });

  describe('getTrending', () => {
    it('should return trending harvests with order counts', async () => {
      db.order.groupBy.mockResolvedValue([
        { harvest_id: 1, _count: { id: 50 } },
        { harvest_id: 2, _count: { id: 30 } },
      ] as any);
      db.harvest.findMany.mockResolvedValue([mockHarvest]);

      const result = await service.getTrending(10);

      expect(result).toHaveLength(1); // Only harvest 1 is available
      expect(result[0].order_count).toBe(50);
    });

    it('should use default limit of 10', async () => {
      db.order.groupBy.mockResolvedValue([]);
      db.harvest.findMany.mockResolvedValue([]);

      await service.getTrending();

      expect(db.order.groupBy).toHaveBeenCalledWith(
        expect.objectContaining({ take: 10 }),
      );
    });
  });

  describe('getListingDetail', () => {
    it('should return harvest with farmer rating', async () => {
      db.harvest.findUnique.mockResolvedValue(mockHarvest);
      db.review.aggregate.mockResolvedValue({
        _avg: { rating: 4.2 },
        _count: { rating: 15 },
      });

      const result = await service.getListingDetail(1);

      expect(result.farmer_rating).toEqual({
        avg: 4.2,
        count: 15,
      });
    });

    it('should throw NotFoundException if listing not found', async () => {
      db.harvest.findUnique.mockResolvedValue(null);

      await expect(service.getListingDetail(999)).rejects.toThrow(NotFoundException);
    });

    it('should handle farmer with no reviews', async () => {
      db.harvest.findUnique.mockResolvedValue(mockHarvest);
      db.review.aggregate.mockResolvedValue({
        _avg: { rating: null },
        _count: { rating: 0 },
      });

      const result = await service.getListingDetail(1);

      expect(result.farmer_rating.avg).toBeNull();
      expect(result.farmer_rating.count).toBe(0);
    });
  });
});
