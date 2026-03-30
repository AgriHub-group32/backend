import { HarvestService } from './harvest.service';
import { CreateHarvestDto } from './dtos/create-harvest.dto';
import { UpdateHarvestDto } from './dtos/update-harvest.dto';
import type { user } from '../../generated/prisma/index';
export declare class HarvestController {
    private readonly harvestService;
    constructor(harvestService: HarvestService);
    create(user: user, dto: CreateHarvestDto): Promise<{
        message: string;
        harvest: {
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
        };
    }>;
    getMyHarvests(user: user): Promise<({
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
    })[]>;
    getCategories(): Promise<{
        category: string;
    }[]>;
    createCategory(category: string): Promise<{
        category: string;
    }>;
    getById(id: number): Promise<{
        user: {
            id: number;
            full_name: string;
            profile: string;
            location: string;
            type: import("../../generated/prisma/index").$Enums.user_type;
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
    }>;
    update(id: number, user: user, dto: UpdateHarvestDto): Promise<{
        message: string;
        harvest: {
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
        };
    }>;
    delete(id: number, user: user): Promise<{
        message: string;
    }>;
    addImages(id: number, user: user, files: Express.Multer.File[]): Promise<{
        message: string;
        images: {
            id: number;
            harvest_id: number;
            img_url: string;
        }[];
    }>;
    removeImage(id: number, imageId: number, user: user): Promise<{
        message: string;
    }>;
}
