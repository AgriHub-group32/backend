import { PrismaService } from '../../database/prisma.service';
import { CreateOrderDto } from './dtos/create-order.dto';
export declare class OrderService {
    private readonly db;
    constructor(db: PrismaService);
    create(buyerId: number, dto: CreateOrderDto): Promise<{
        message: string;
        order: {
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
        };
    }>;
    getOrders(userId: number, userType: string): Promise<({
        user_order_buyer_idTouser: {
            id: number;
            full_name: string;
        };
        harvest: {
            name: string;
            id: number;
            unit: string;
            category: string;
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
    })[]>;
    getById(orderId: number, userId: number): Promise<{
        user_order_buyer_idTouser: {
            id: number;
            full_name: string;
            profile: string;
        };
        harvest: {
            user: {
                id: number;
                full_name: string;
                profile: string;
            };
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
        };
        payment: {
            id: number;
            created_at: Date | null;
            status: import("src/generated/prisma").$Enums.payment_status;
            order_id: number;
            amount: import("src/generated/prisma/runtime/library").Decimal;
            method: import("src/generated/prisma").$Enums.payment_method;
            transaction_ref: string | null;
        }[];
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
    }>;
    accept(orderId: number, farmerId: number): Promise<{
        message: string;
    }>;
    reject(orderId: number, farmerId: number): Promise<{
        message: string;
    }>;
    complete(orderId: number, farmerId: number): Promise<{
        message: string;
    }>;
    cancel(orderId: number, buyerId: number): Promise<{
        message: string;
    }>;
    getHistory(userId: number): Promise<({
        user_order_buyer_idTouser: {
            id: number;
            full_name: string;
        };
        harvest: {
            name: string;
            id: number;
            unit: string;
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
    })[]>;
    private getOrderForFarmer;
}
