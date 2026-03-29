import { MarketplaceService } from './marketplace.service';
import { SearchQueryDto } from './dtos/search-query.dto';
export declare class MarketplaceController {
    private readonly marketplaceService;
    constructor(marketplaceService: MarketplaceService);
    search(query: SearchQueryDto): Promise<{
        data: ({
            user: {
                id: number;
                full_name: string;
                profile: string;
                location: string;
            };
            harvest_image: {
                id: number;
                harvest_id: number;
                img_url: string;
            }[];
        } & {
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
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    getTrending(): Promise<{
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
    getListingDetail(id: number): Promise<{
        farmer_rating: {
            avg: number;
            count: number;
        };
        user: {
            id: number;
            full_name: string;
            profile: string;
            location: string;
            bio: string;
            farm_name: string;
            type: import("src/generated/prisma").$Enums.user_type;
            created_at: Date;
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
    }>;
}
