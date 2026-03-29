import { OrderService } from './order.service';
import { CreateOrderDto } from './dtos/create-order.dto';
import type { user } from '../../generated/prisma/index';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(user: user, dto: CreateOrderDto): Promise<{
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
            status: import("../../generated/prisma/index").$Enums.order_status;
            note: string | null;
        };
    }>;
    getOrders(user: user): Promise<({
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
        status: import("../../generated/prisma/index").$Enums.order_status;
        note: string | null;
    })[]>;
    getHistory(user: user): Promise<({
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
        status: import("../../generated/prisma/index").$Enums.order_status;
        note: string | null;
    })[]>;
    getById(id: number, user: user): Promise<{
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
            status: import("../../generated/prisma/index").$Enums.payment_status;
            order_id: number;
            amount: import("src/generated/prisma/runtime/library").Decimal;
            method: import("../../generated/prisma/index").$Enums.payment_method;
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
        status: import("../../generated/prisma/index").$Enums.order_status;
        note: string | null;
    }>;
    accept(id: number, user: user): Promise<{
        message: string;
    }>;
    reject(id: number, user: user): Promise<{
        message: string;
    }>;
    complete(id: number, user: user): Promise<{
        message: string;
    }>;
    cancel(id: number, user: user): Promise<{
        message: string;
    }>;
}
