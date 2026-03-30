import { PrismaService } from '../../database/prisma.service';
export declare class AnalyticsService {
    private readonly db;
    constructor(db: PrismaService);
    getSalesAnalytics(farmerId: number): Promise<{
        total_revenue: number;
        total_orders: number;
        by_category: Record<string, {
            count: number;
            revenue: number;
        }>;
    }>;
    getDemandTrends(): Promise<{
        harvest: {
            name: string;
            id: number;
            unit: string;
            category: string;
        };
        order_count: number;
        total_quantity_ordered: number;
    }[]>;
    getPopularProducts(): Promise<{
        order_count: number;
        user: {
            id: number;
            full_name: string;
            location: string;
        };
        harvest_image: {
            id: number;
            harvest_id: number;
            img_url: string;
        }[];
        name: string;
        id: number;
        location: string | null;
        created_at: Date | null;
        updated_at: Date | null;
        quantity: number;
        unit_price: import("src/generated/prisma/runtime/library").Decimal;
        unit: string;
        owner_id: number;
        category: string;
        description: string | null;
        is_available: boolean;
    }[]>;
    getPlatformMetrics(): Promise<{
        users: {
            total: number;
            farmers: number;
            wholesalers: number;
        };
        harvests: {
            total: number;
            active: number;
        };
        orders: {
            total: number;
            completed: number;
        };
        total_revenue: number | import("src/generated/prisma/runtime/library").Decimal;
    }>;
}
