import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service.js';
import { SearchQueryDto } from './dtos/search-query.dto.js';
import { Prisma } from '../../generated/prisma/index.js';

@Injectable()
export class MarketplaceService {
  constructor(private readonly db: PrismaService) {}

  async search(query: SearchQueryDto) {
    const where: Prisma.harvestWhereInput = { is_available: true };

    if (query.search) {
      where.name = { contains: query.search };
    }
    if (query.category) {
      where.category = query.category;
    }
    if (query.location) {
      where.location = { contains: query.location };
    }
    if (query.minPrice !== undefined || query.maxPrice !== undefined) {
      where.unit_price = {};
      if (query.minPrice !== undefined) where.unit_price.gte = query.minPrice;
      if (query.maxPrice !== undefined) where.unit_price.lte = query.maxPrice;
    }
    if (query.minQuantity !== undefined) {
      where.quantity = { gte: query.minQuantity };
    }

    const orderBy: Prisma.harvestOrderByWithRelationInput = {};
    if (query.sortBy === 'price') orderBy.unit_price = query.sortOrder || 'asc';
    else if (query.sortBy === 'quantity') orderBy.quantity = query.sortOrder || 'desc';
    else orderBy.created_at = query.sortOrder || 'desc';

    const page = query.page || 1;
    const limit = query.limit || 20;
    const skip = (page - 1) * limit;

    const [harvests, total] = await Promise.all([
      this.db.harvest.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: {
          harvest_image: true,
          user: { select: { id: true, full_name: true, location: true, profile: true } },
        },
      }),
      this.db.harvest.count({ where }),
    ]);

    return {
      data: harvests,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getTrending(limit: number = 10) {
    const trending = await this.db.order.groupBy({
      by: ['harvest_id'],
      _count: { id: true },
      orderBy: { _count: { id: 'desc' } },
      take: limit,
    });

    const harvestIds = trending.map((t) => t.harvest_id);
    const harvests = await this.db.harvest.findMany({
      where: { id: { in: harvestIds }, is_available: true },
      include: {
        harvest_image: true,
        user: { select: { id: true, full_name: true, location: true } },
      },
    });

    return harvests.map((h) => ({
      ...h,
      order_count: trending.find((t) => t.harvest_id === h.id)?._count.id || 0,
    }));
  }

  async getListingDetail(id: number) {
    const harvest = await this.db.harvest.findUnique({
      where: { id },
      include: {
        harvest_image: true,
        user: {
          select: {
            id: true,
            full_name: true,
            profile: true,
            type: true,
            location: true,
            farm_name: true,
            bio: true,
            created_at: true,
          },
        },
      },
    });
    if (!harvest) throw new NotFoundException('Listing not found');

    const avgRating = await this.db.review.aggregate({
      where: { reviewee_id: harvest.owner_id },
      _avg: { rating: true },
      _count: { rating: true },
    });

    return {
      ...harvest,
      farmer_rating: {
        avg: avgRating._avg.rating,
        count: avgRating._count.rating,
      },
    };
  }
}
