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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let OrderService = class OrderService {
    constructor(db) {
        this.db = db;
    }
    async create(buyerId, dto) {
        const harvest = await this.db.harvest.findUnique({ where: { id: dto.harvest_id } });
        if (!harvest)
            throw new common_1.NotFoundException('Harvest not found');
        if (!harvest.is_available)
            throw new common_1.BadRequestException('Harvest is not available');
        if (harvest.quantity < dto.quantity)
            throw new common_1.BadRequestException(`Insufficient quantity. Available: ${harvest.quantity}`);
        if (harvest.owner_id === buyerId)
            throw new common_1.BadRequestException('Cannot order your own harvest');
        const total_price = Number(harvest.unit_price) * dto.quantity;
        const order = await this.db.order.create({
            data: {
                buyer_id: buyerId,
                harvest_id: dto.harvest_id,
                quantity: dto.quantity,
                unit_price: harvest.unit_price,
                total_price,
                note: dto.note,
            },
        });
        return { message: 'Order placed successfully', order };
    }
    async getOrders(userId, userType) {
        if (userType === 'wholesaler') {
            return this.db.order.findMany({
                where: { buyer_id: userId },
                include: {
                    harvest: { select: { id: true, name: true, unit: true, category: true } },
                    user_order_buyer_idTouser: { select: { id: true, full_name: true } },
                },
                orderBy: { created_at: 'desc' },
            });
        }
        return this.db.order.findMany({
            where: { harvest: { owner_id: userId } },
            include: {
                harvest: { select: { id: true, name: true, unit: true, category: true } },
                user_order_buyer_idTouser: { select: { id: true, full_name: true } },
            },
            orderBy: { created_at: 'desc' },
        });
    }
    async getById(orderId, userId) {
        const order = await this.db.order.findUnique({
            where: { id: orderId },
            include: {
                harvest: {
                    include: {
                        user: { select: { id: true, full_name: true, profile: true } },
                    },
                },
                user_order_buyer_idTouser: { select: { id: true, full_name: true, profile: true } },
                payment: true,
            },
        });
        if (!order)
            throw new common_1.NotFoundException('Order not found');
        if (order.buyer_id !== userId && order.harvest.owner_id !== userId)
            throw new common_1.ForbiddenException('Not authorized to view this order');
        return order;
    }
    async accept(orderId, farmerId) {
        const order = await this.getOrderForFarmer(orderId, farmerId);
        if (order.status !== 'pending')
            throw new common_1.BadRequestException('Can only accept pending orders');
        const harvest = await this.db.harvest.findUnique({ where: { id: order.harvest_id } });
        if (!harvest || harvest.quantity < order.quantity)
            throw new common_1.BadRequestException('Insufficient harvest quantity');
        const newQuantity = harvest.quantity - order.quantity;
        await this.db.$transaction([
            this.db.order.update({ where: { id: orderId }, data: { status: 'accepted' } }),
            this.db.harvest.update({
                where: { id: order.harvest_id },
                data: {
                    quantity: newQuantity,
                    is_available: newQuantity > 0,
                },
            }),
        ]);
        return { message: 'Order accepted' };
    }
    async reject(orderId, farmerId) {
        const order = await this.getOrderForFarmer(orderId, farmerId);
        if (order.status !== 'pending')
            throw new common_1.BadRequestException('Can only reject pending orders');
        await this.db.order.update({ where: { id: orderId }, data: { status: 'rejected' } });
        return { message: 'Order rejected' };
    }
    async complete(orderId, farmerId) {
        const order = await this.getOrderForFarmer(orderId, farmerId);
        if (order.status !== 'accepted')
            throw new common_1.BadRequestException('Can only complete accepted orders');
        await this.db.order.update({ where: { id: orderId }, data: { status: 'completed' } });
        return { message: 'Order completed' };
    }
    async cancel(orderId, buyerId) {
        const order = await this.db.order.findUnique({ where: { id: orderId } });
        if (!order)
            throw new common_1.NotFoundException('Order not found');
        if (order.buyer_id !== buyerId)
            throw new common_1.ForbiddenException('Not the buyer of this order');
        if (order.status !== 'pending')
            throw new common_1.BadRequestException('Can only cancel pending orders');
        await this.db.order.update({ where: { id: orderId }, data: { status: 'cancelled' } });
        return { message: 'Order cancelled' };
    }
    async getHistory(userId) {
        return this.db.order.findMany({
            where: {
                OR: [
                    { buyer_id: userId },
                    { harvest: { owner_id: userId } },
                ],
                status: { in: ['completed', 'cancelled', 'rejected'] },
            },
            include: {
                harvest: { select: { id: true, name: true, unit: true } },
                user_order_buyer_idTouser: { select: { id: true, full_name: true } },
            },
            orderBy: { updated_at: 'desc' },
        });
    }
    async getOrderForFarmer(orderId, farmerId) {
        const order = await this.db.order.findUnique({
            where: { id: orderId },
            include: { harvest: true },
        });
        if (!order)
            throw new common_1.NotFoundException('Order not found');
        if (order.harvest.owner_id !== farmerId)
            throw new common_1.ForbiddenException('Not the owner of this harvest');
        return order;
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
//# sourceMappingURL=order.service.js.map