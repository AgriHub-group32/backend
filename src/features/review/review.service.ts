import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateReviewDto } from './dtos/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(private readonly db: PrismaService) {}

  async create(reviewerId: number, dto: CreateReviewDto) {
    const order = await this.db.order.findUnique({
      where: { id: dto.order_id },
      include: { harvest: true },
    });
    if (!order) throw new NotFoundException('Order not found');
    if (order.status !== 'completed')
      throw new BadRequestException('Can only review completed orders');

    // Determine who is reviewing whom
    let revieweeId: number;
    if (order.buyer_id === reviewerId) {
      revieweeId = order.harvest.owner_id; // buyer reviews farmer
    } else if (order.harvest.owner_id === reviewerId) {
      revieweeId = order.buyer_id; // farmer reviews buyer
    } else {
      throw new ForbiddenException('Not a participant in this order');
    }

    const existing = await this.db.review.findFirst({
      where: { reviewer_id: reviewerId, order_id: dto.order_id },
    });
    if (existing) throw new BadRequestException('You have already reviewed this order');

    const review = await this.db.review.create({
      data: {
        reviewer_id: reviewerId,
        reviewee_id: revieweeId,
        order_id: dto.order_id,
        rating: dto.rating,
        comment: dto.comment,
      },
    });

    return { message: 'Review submitted', review };
  }

  async getForUser(userId: number) {
    const reviews = await this.db.review.findMany({
      where: { reviewee_id: userId },
      include: {
        user_review_reviewer_idTouser: {
          select: { id: true, full_name: true, profile: true },
        },
      },
      orderBy: { created_at: 'desc' },
    });

    const avg = await this.db.review.aggregate({
      where: { reviewee_id: userId },
      _avg: { rating: true },
      _count: { rating: true },
    });

    return {
      reviews,
      avg_rating: avg._avg.rating,
      total_reviews: avg._count.rating,
    };
  }

  async getForOrder(orderId: number) {
    return this.db.review.findMany({
      where: { order_id: orderId },
      include: {
        user_review_reviewer_idTouser: {
          select: { id: true, full_name: true, profile: true },
        },
        user_review_reviewee_idTouser: {
          select: { id: true, full_name: true, profile: true },
        },
      },
    });
  }

  async getMyReviews(userId: number) {
    return this.db.review.findMany({
      where: { reviewer_id: userId },
      include: {
        user_review_reviewee_idTouser: {
          select: { id: true, full_name: true, profile: true },
        },
        order: {
          select: { id: true, harvest_id: true, total_price: true },
        },
      },
      orderBy: { created_at: 'desc' },
    });
  }
}
