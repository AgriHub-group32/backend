import { ReviewService } from './review.service';
import { CreateReviewDto } from './dtos/create-review.dto';
import type { user } from '../../generated/prisma/index';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    create(user: user, dto: CreateReviewDto): Promise<{
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
    getMyReviews(user: user): Promise<({
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
}
