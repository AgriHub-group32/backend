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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let AdminService = class AdminService {
    constructor(db) {
        this.db = db;
    }
    async getUsers(page = 1, limit = 20, type, isActive) {
        const where = {};
        if (type)
            where.type = type;
        if (isActive !== undefined)
            where.is_active = isActive;
        const skip = (page - 1) * limit;
        const [users, total] = await Promise.all([
            this.db.user.findMany({
                where,
                select: {
                    id: true,
                    full_name: true,
                    email: true,
                    type: true,
                    is_verified: true,
                    is_active: true,
                    created_at: true,
                },
                skip,
                take: limit,
                orderBy: { created_at: 'desc' },
            }),
            this.db.user.count({ where }),
        ]);
        return { data: users, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
    }
    async verifyUser(userId) {
        const user = await this.db.user.findUnique({ where: { id: userId } });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        if (user.is_verified)
            throw new common_1.BadRequestException('User is already verified');
        await this.db.user.update({ where: { id: userId }, data: { is_verified: true } });
        return { message: 'User verified successfully' };
    }
    async deactivateUser(userId) {
        const user = await this.db.user.findUnique({ where: { id: userId } });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        await this.db.user.update({ where: { id: userId }, data: { is_active: false } });
        return { message: 'User deactivated' };
    }
    async getHarvests(page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const [harvests, total] = await Promise.all([
            this.db.harvest.findMany({
                skip,
                take: limit,
                include: {
                    user: { select: { id: true, full_name: true, email: true } },
                    harvest_image: true,
                },
                orderBy: { created_at: 'desc' },
            }),
            this.db.harvest.count(),
        ]);
        return { data: harvests, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
    }
    async removeHarvest(harvestId) {
        const harvest = await this.db.harvest.findUnique({ where: { id: harvestId } });
        if (!harvest)
            throw new common_1.NotFoundException('Harvest not found');
        await this.db.harvest_image.deleteMany({ where: { harvest_id: harvestId } });
        await this.db.harvest.delete({ where: { id: harvestId } });
        return { message: 'Harvest removed' };
    }
    async getOrders(page = 1, limit = 20, status) {
        const where = {};
        if (status)
            where.status = status;
        const skip = (page - 1) * limit;
        const [orders, total] = await Promise.all([
            this.db.order.findMany({
                where,
                skip,
                take: limit,
                include: {
                    harvest: { select: { id: true, name: true } },
                    user_order_buyer_idTouser: { select: { id: true, full_name: true } },
                },
                orderBy: { created_at: 'desc' },
            }),
            this.db.order.count({ where }),
        ]);
        return { data: orders, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
    }
    async resolveDispute(orderId) {
        const order = await this.db.order.findUnique({ where: { id: orderId } });
        if (!order)
            throw new common_1.NotFoundException('Order not found');
        await this.db.order.update({
            where: { id: orderId },
            data: { status: 'completed' },
        });
        return { message: 'Dispute resolved, order marked as completed' };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map