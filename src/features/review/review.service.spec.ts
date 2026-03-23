import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { ReviewService } from './review.service';
import { PrismaService } from '../../database/prisma.service';

describe('ReviewService', () => {
  let service: ReviewService;
  let db: jest.Mocked<PrismaService>;

  const mockHarvest = { id: 1, owner_id: 10 };
  const mockOrder = {
    id: 1,
    buyer_id: 20,
    harvest_id: 1,
    status: 'completed',
    harvest: mockHarvest,
  };

  const mockReview = {
    id: 1,
    reviewer_id: 20,
    reviewee_id: 10,
    order_id: 1,
    rating: 5,
    comment: 'Great produce!',
    created_at: new Date(),
  };

  beforeEach(async () => {
    const mockDb = {
      order: {
        findUnique: jest.fn(),
      },
      review: {
        findFirst: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        aggregate: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewService,
        { provide: PrismaService, useValue: mockDb },
      ],
    }).compile();

    service = module.get<ReviewService>(ReviewService);
    db = module.get(PrismaService);
  });

  describe('create', () => {
    const createDto = { order_id: 1, rating: 5, comment: 'Great produce!' };

    it('should create a review from buyer to farmer', async () => {
      db.order.findUnique.mockResolvedValue(mockOrder);
      db.review.findFirst.mockResolvedValue(null);
      db.review.create.mockResolvedValue(mockReview);

      const result = await service.create(20, createDto); // buyer reviews

      expect(result.message).toBe('Review submitted');
      expect(db.review.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          reviewer_id: 20,
          reviewee_id: 10, // farmer (harvest owner)
        }),
      });
    });

    it('should create a review from farmer to buyer', async () => {
      db.order.findUnique.mockResolvedValue(mockOrder);
      db.review.findFirst.mockResolvedValue(null);
      db.review.create.mockResolvedValue({ ...mockReview, reviewer_id: 10, reviewee_id: 20 });

      const result = await service.create(10, createDto); // farmer reviews

      expect(db.review.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          reviewer_id: 10,
          reviewee_id: 20, // buyer
        }),
      });
    });

    it('should throw NotFoundException if order not found', async () => {
      db.order.findUnique.mockResolvedValue(null);

      await expect(service.create(20, createDto)).rejects.toThrow(NotFoundException);
    });

    it('should throw BadRequestException if order not completed', async () => {
      db.order.findUnique.mockResolvedValue({ ...mockOrder, status: 'accepted' });

      await expect(service.create(20, createDto)).rejects.toThrow(BadRequestException);
    });

    it('should throw ForbiddenException if reviewer is not a participant', async () => {
      db.order.findUnique.mockResolvedValue(mockOrder);

      await expect(service.create(99, createDto)).rejects.toThrow(ForbiddenException);
    });

    it('should throw BadRequestException if already reviewed', async () => {
      db.order.findUnique.mockResolvedValue(mockOrder);
      db.review.findFirst.mockResolvedValue(mockReview);

      await expect(service.create(20, createDto)).rejects.toThrow(BadRequestException);
    });
  });

  describe('getForUser', () => {
    it('should return reviews and average rating for a user', async () => {
      db.review.findMany.mockResolvedValue([mockReview]);
      db.review.aggregate.mockResolvedValue({
        _avg: { rating: 4.5 },
        _count: { rating: 10 },
      });

      const result = await service.getForUser(10);

      expect(result.reviews).toEqual([mockReview]);
      expect(result.avg_rating).toBe(4.5);
      expect(result.total_reviews).toBe(10);
    });

    it('should handle user with no reviews', async () => {
      db.review.findMany.mockResolvedValue([]);
      db.review.aggregate.mockResolvedValue({
        _avg: { rating: null },
        _count: { rating: 0 },
      });

      const result = await service.getForUser(10);

      expect(result.reviews).toEqual([]);
      expect(result.avg_rating).toBeNull();
      expect(result.total_reviews).toBe(0);
    });
  });

  describe('getForOrder', () => {
    it('should return all reviews for an order', async () => {
      db.review.findMany.mockResolvedValue([mockReview]);

      const result = await service.getForOrder(1);

      expect(result).toEqual([mockReview]);
      expect(db.review.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { order_id: 1 } }),
      );
    });
  });

  describe('getMyReviews', () => {
    it('should return reviews written by the user', async () => {
      db.review.findMany.mockResolvedValue([mockReview]);

      const result = await service.getMyReviews(20);

      expect(result).toEqual([mockReview]);
      expect(db.review.findMany).toHaveBeenCalledWith(
        expect.objectContaining({ where: { reviewer_id: 20 } }),
      );
    });
  });
});
