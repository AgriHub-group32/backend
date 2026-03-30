import { PrismaService } from '../../database/prisma.service';
import { CreatePaymentDto } from './dtos/create-payment.dto';
export declare class PaymentService {
    private readonly db;
    constructor(db: PrismaService);
    create(userId: number, dto: CreatePaymentDto): Promise<{
        message: string;
        payment: {
            id: number;
            created_at: Date | null;
            status: import("src/generated/prisma").$Enums.payment_status;
            order_id: number;
            amount: import("src/generated/prisma/runtime/library").Decimal;
            method: import("src/generated/prisma").$Enums.payment_method;
            transaction_ref: string | null;
        };
    }>;
    getPayments(userId: number): Promise<({
        order: {
            id: number;
            harvest_id: number;
            quantity: number;
            total_price: import("src/generated/prisma/runtime/library").Decimal;
            status: import("src/generated/prisma").$Enums.order_status;
        };
    } & {
        id: number;
        created_at: Date | null;
        status: import("src/generated/prisma").$Enums.payment_status;
        order_id: number;
        amount: import("src/generated/prisma/runtime/library").Decimal;
        method: import("src/generated/prisma").$Enums.payment_method;
        transaction_ref: string | null;
    })[]>;
    getById(paymentId: number, userId: number): Promise<{
        order: {
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
        };
    } & {
        id: number;
        created_at: Date | null;
        status: import("src/generated/prisma").$Enums.payment_status;
        order_id: number;
        amount: import("src/generated/prisma/runtime/library").Decimal;
        method: import("src/generated/prisma").$Enums.payment_method;
        transaction_ref: string | null;
    }>;
    confirm(paymentId: number): Promise<{
        message: string;
    }>;
    refund(paymentId: number): Promise<{
        message: string;
    }>;
}
