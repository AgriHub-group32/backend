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
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let ReviewService = class ReviewService {
    constructor(db) {
        this.db = db;
    }
    async create(reviewerId, dto) {
        const order = await this.db.order.findUnique({
            where: { id: dto.order_id },
            include: { harvest: true },
        });
        if (!order)
            throw new common_1.NotFoundException('Order not found');
        if (order.status !== 'completed')
            throw new common_1.BadRequestException('Can only review completed orders');
        let revieweeId;
        if (order.buyer_id === reviewerId) {
            revieweeId = order.harvest.owner_id;
        }
        else if (order.harvest.owner_id === reviewerId) {
            revieweeId = order.buyer_id;
        }
        else {
            throw new common_1.ForbiddenException('Not a participant in this order');
        }
        const existing = await this.db.review.findFirst({
            where: { reviewer_id: reviewerId, order_id: dto.order_id },
        });
        if (existing)
            throw new common_1.BadRequestException('You have already reviewed this order');
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
    async getForUser(userId) {
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
    async getForOrder(orderId) {
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
    async getMyReviews(userId) {
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
};
exports.ReviewService = ReviewService;
exports.ReviewService = ReviewService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReviewService);
//# sourceMappingURL=review.service.js.map