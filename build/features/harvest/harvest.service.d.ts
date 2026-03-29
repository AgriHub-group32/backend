import { PrismaService } from '../../database/prisma.service';
import { CreateHarvestDto } from './dtos/create-harvest.dto';
import { UpdateHarvestDto } from './dtos/update-harvest.dto';
export declare class HarvestService {
    private readonly db;
    constructor(db: PrismaService);
    create(ownerId: number, dto: CreateHarvestDto): Promise<{
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
    getMyHarvests(ownerId: number): Promise<({
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
    getById(id: number): Promise<{
        user: {
            id: number;
            full_name: string;
            profile: string;
            location: string;
            type: import("src/generated/prisma").$Enums.user_type;
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
    update(id: number, ownerId: number, dto: UpdateHarvestDto): Promise<{
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
    delete(id: number, ownerId: number): Promise<{
        message: string;
    }>;
    addImages(harvestId: number, ownerId: number, files: Express.Multer.File[]): Promise<{
        message: string;
        images: {
            id: number;
            harvest_id: number;
            img_url: string;
        }[];
    }>;
    removeImage(harvestId: number, imageId: number, ownerId: number): Promise<{
        message: string;
    }>;
    createCategory(category: string): Promise<{
        category: string;
    }>;
    getCategories(): Promise<{
        category: string;
    }[]>;
}
