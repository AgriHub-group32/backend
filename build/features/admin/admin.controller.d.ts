import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getUsers(page?: string, limit?: string, type?: string, isActive?: string): Promise<{
        data: {
            id: number;
            full_name: string;
            email: string;
            is_verified: boolean;
            is_active: boolean;
            type: import("src/generated/prisma").$Enums.user_type;
            created_at: Date;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    verifyUser(id: number): Promise<{
        message: string;
    }>;
    deactivateUser(id: number): Promise<{
        message: string;
    }>;
    getHarvests(page?: string, limit?: string): Promise<{
        data: ({
            user: {
                id: number;
                full_name: string;
                email: string;
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
    removeHarvest(id: number): Promise<{
        message: string;
    }>;
    getOrders(page?: string, limit?: string, status?: string): Promise<{
        data: ({
            user_order_buyer_idTouser: {
                id: number;
                full_name: string;
            };
            harvest: {
                name: string;
                id: number;
            };
        } & {
            id: number;
            created_at: Date | null;
            updated_at: Date | null;
            buyer_id: number;
            harvest_id: number;
            quantity: number;
            unit_price: import("src/generated/prisma/runtime/library").Decimal;
            total_price: import("src/generated/prisma/runtime/library").Decimal;
            status: import("src/generated/prisma").$Enums.order_status;
            note: string | null;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    resolveDispute(id: number): Promise<{
        message: string;
    }>;
}
