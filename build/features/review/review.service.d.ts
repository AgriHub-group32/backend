import { PrismaService } from '../../database/prisma.service';
import { CreateReviewDto } from './dtos/create-review.dto';
export declare class ReviewService {
    private readonly db;
    constructor(db: PrismaService);
    create(reviewerId: number, dto: CreateReviewDto): Promise<{
        message: string;
        review: {
            id: number;
            created_at: Date | null;
            rating: number;
            comment: string | null;
            reviewer_id: number;
            reviewee_id: number;
            order_id: number;
        };
    }>;
    getForUser(userId: number): Promise<{
        reviews: ({
            user_review_reviewer_idTouser: {
                id: number;
                full_name: string;
                profile: string;
            };
        } & {
            id: number;
            created_at: Date | null;
            rating: number;
            comment: string | null;
            reviewer_id: number;
            reviewee_id: number;
            order_id: number;
        })[];
        avg_rating: number;
        total_reviews: number;
    }>;
    getForOrder(orderId: number): Promise<({
        user_review_reviewer_idTouser: {
            id: number;
            full_name: string;
            profile: string;
        };
        user_review_reviewee_idTouser: {
            id: number;
            full_name: string;
            profile: string;
        };
    } & {
        id: number;
        created_at: Date | null;
        rating: number;
        comment: string | null;
        reviewer_id: number;
        reviewee_id: number;
        order_id: number;
    })[]>;
    getMyReviews(userId: number): Promise<({
        order: {
            id: number;
            harvest_id: number;
            total_price: import("src/generated/prisma/runtime/library").Decimal;
        };
        user_review_reviewee_idTouser: {
            id: number;
            full_name: string;
            profile: string;
        };
    } & {
        id: number;
        created_at: Date | null;
        rating: number;
        comment: string | null;
        reviewer_id: number;
        reviewee_id: number;
        order_id: number;
    })[]>;
}
