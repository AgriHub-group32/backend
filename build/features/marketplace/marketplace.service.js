"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketplaceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let MarketplaceService = class MarketplaceService {
    constructor(db) {
        this.db = db;
    }
    async search(query) {
        const where = { is_available: true };
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
            if (query.minPrice !== undefined)
                where.unit_price.gte = query.minPrice;
            if (query.maxPrice !== undefined)
                where.unit_price.lte = query.maxPrice;
        }
        if (query.minQuantity !== undefined) {
            where.quantity = { gte: query.minQuantity };
        }
        const orderBy = {};
        if (query.sortBy === 'price')
            orderBy.unit_price = query.sortOrder || 'asc';
        else if (query.sortBy === 'quantity')
            orderBy.quantity = query.sortOrder || 'desc';
        else
            orderBy.created_at = query.sortOrder || 'desc';
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
    async getTrending(limit = 10) {
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
    async getListingDetail(id) {
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
        if (!harvest)
            throw new common_1.NotFoundException('Listing not found');
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
};
exports.MarketplaceService = MarketplaceService;
exports.MarketplaceService = MarketplaceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MarketplaceService);
//# sourceMappingURL=marketplace.service.js.map