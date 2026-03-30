import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dtos/create-payment.dto';
import type { user } from '../../generated/prisma/index';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    create(user: user, dto: CreatePaymentDto): Promise<{
        message: string;
        payment: {
            id: number;
            created_at: Date | null;
            status: import("../../generated/prisma/index").$Enums.payment_status;
            order_id: number;
            amount: import("src/generated/prisma/runtime/library").Decimal;
            method: import("../../generated/prisma/index").$Enums.payment_method;
            transaction_ref: string | null;
        };
    }>;
    getPayments(user: user): Promise<({
        order: {
            id: number;
            harvest_id: number;
            quantity: number;
            total_price: import("src/generated/prisma/runtime/library").Decimal;
            status: import("../../generated/prisma/index").$Enums.order_status;
        };
    } & {
        id: number;
        created_at: Date | null;
        status: import("../../generated/prisma/index").$Enums.payment_status;
        order_id: number;
        amount: import("src/generated/prisma/runtime/library").Decimal;
        method: import("../../generated/prisma/index").$Enums.payment_method;
        transaction_ref: string | null;
    })[]>;
    getById(id: number, user: user): Promise<{
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
            status: import("../../generated/prisma/index").$Enums.order_status;
            note: string | null;
        };
    } & {
        id: number;
        created_at: Date | null;
        status: import("../../generated/prisma/index").$Enums.payment_status;
        order_id: number;
        amount: import("src/generated/prisma/runtime/library").Decimal;
        method: import("../../generated/prisma/index").$Enums.payment_method;
        transaction_ref: string | null;
    }>;
    confirm(id: number): Promise<{
        message: string;
    }>;
    refund(id: number): Promise<{
        message: string;
    }>;
}
