"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const prisma_service_1 = require("../../database/prisma.service");
let PaymentService = class PaymentService {
    constructor(db) {
        this.db = db;
    }
    async create(userId, dto) {
        const order = await this.db.order.findUnique({ where: { id: dto.order_id } });
        if (!order)
            throw new common_1.NotFoundException('Order not found');
        if (order.buyer_id !== userId)
            throw new common_1.ForbiddenException('Not the buyer of this order');
        if (order.status !== 'accepted')
            throw new common_1.BadRequestException('Can only pay for accepted orders');
        const existingPayment = await this.db.payment.findFirst({
            where: { order_id: dto.order_id, status: { in: ['pending', 'completed'] } },
        });
        if (existingPayment)
            throw new common_1.BadRequestException('Payment already exists for this order');
        const payment = await this.db.payment.create({
            data: {
                order_id: dto.order_id,
                amount: order.total_price,
                method: dto.method,
                transaction_ref: (0, crypto_1.randomUUID)(),
            },
        });
        return { message: 'Payment initiated', payment };
    }
    async getPayments(userId) {
        return this.db.payment.findMany({
            where: { order: { buyer_id: userId } },
            include: {
                order: {
                    select: { id: true, harvest_id: true, quantity: true, total_price: true, status: true },
                },
            },
            orderBy: { created_at: 'desc' },
        });
    }
    async getById(paymentId, userId) {
        const payment = await this.db.payment.findUnique({
            where: { id: paymentId },
            include: {
                order: {
                    include: {
                        harvest: { select: { id: true, name: true } },
                        user_order_buyer_idTouser: { select: { id: true, full_name: true } },
                    },
                },
            },
        });
        if (!payment)
            throw new common_1.NotFoundException('Payment not found');
        if (payment.order.buyer_id !== userId &&
            payment.order.harvest.id !== userId) {
        }
        return payment;
    }
    async confirm(paymentId) {
        const payment = await this.db.payment.findUnique({ where: { id: paymentId } });
        if (!payment)
            throw new common_1.NotFoundException('Payment not found');
        if (payment.status !== 'pending')
            throw new common_1.BadRequestException('Can only confirm pending payments');
        await this.db.payment.update({
            where: { id: paymentId },
            data: { status: 'completed' },
        });
        return { message: 'Payment confirmed' };
    }
    async refund(paymentId) {
        const payment = await this.db.payment.findUnique({ where: { id: paymentId } });
        if (!payment)
            throw new common_1.NotFoundException('Payment not found');
        if (payment.status !== 'completed')
            throw new common_1.BadRequestException('Can only refund completed payments');
        await this.db.payment.update({
            where: { id: paymentId },
            data: { status: 'refunded' },
        });
        return { message: 'Payment refunded' };
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentService);
//# sourceMappingURL=payment.service.js.map