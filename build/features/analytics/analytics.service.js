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
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let AnalyticsService = class AnalyticsService {
    constructor(db) {
        this.db = db;
    }
    async getSalesAnalytics(farmerId) {
        const orders = await this.db.order.findMany({
            where: {
                harvest: { owner_id: farmerId },
                status: 'completed',
            },
            include: { harvest: { select: { name: true, category: true } } },
        });
        const totalRevenue = orders.reduce((sum, o) => sum + Number(o.total_price), 0);
        const totalOrders = orders.length;
        const byCategory = {};
        for (const order of orders) {
            const cat = order.harvest.category;
            if (!byCategory[cat])
                byCategory[cat] = { count: 0, revenue: 0 };
            byCategory[cat].count++;
            byCategory[cat].revenue += Number(order.total_price);
        }
        return {
            total_revenue: totalRevenue,
            total_orders: totalOrders,
            by_category: byCategory,
        };
    }
    async getDemandTrends() {
        const trends = await this.db.order.groupBy({
            by: ['harvest_id'],
            where: { status: { in: ['accepted', 'completed'] } },
            _count: { id: true },
            _sum: { quantity: true },
            orderBy: { _count: { id: 'desc' } },
            take: 20,
        });
        const harvestIds = trends.map((t) => t.harvest_id);
        const harvests = await this.db.harvest.findMany({
            where: { id: { in: harvestIds } },
            select: { id: true, name: true, category: true, unit: true },
        });
        return trends.map((t) => ({
            harvest: harvests.find((h) => h.id === t.harvest_id),
            order_count: t._count.id,
            total_quantity_ordered: t._sum.quantity,
        }));
    }
    async getPopularProducts() {
        const popular = await this.db.order.groupBy({
            by: ['harvest_id'],
            _count: { id: true },
            orderBy: { _count: { id: 'desc' } },
            take: 10,
        });
        const harvestIds = popular.map((p) => p.harvest_id);
        const harvests = await this.db.harvest.findMany({
            where: { id: { in: harvestIds } },
            include: {
                harvest_image: { take: 1 },
                user: { select: { id: true, full_name: true, location: true } },
            },
        });
        return popular.map((p) => ({
            ...harvests.find((h) => h.id === p.harvest_id),
            order_count: p._count.id,
        }));
    }
    async getPlatformMetrics() {
        const [totalUsers, totalFarmers, totalWholesalers, totalHarvests, activeListings, totalOrders, completedOrders, totalRevenue] = await Promise.all([
            this.db.user.count(),
            this.db.user.count({ where: { type: 'farmer' } }),
            this.db.user.count({ where: { type: 'wholesaler' } }),
            this.db.harvest.count(),
            this.db.harvest.count({ where: { is_available: true } }),
            this.db.order.count(),
            this.db.order.count({ where: { status: 'completed' } }),
            this.db.order.aggregate({
                where: { status: 'completed' },
                _sum: { total_price: true },
            }),
        ]);
        return {
            users: { total: totalUsers, farmers: totalFarmers, wholesalers: totalWholesalers },
            harvests: { total: totalHarvests, active: activeListings },
            orders: { total: totalOrders, completed: completedOrders },
            total_revenue: totalRevenue._sum.total_price || 0,
        };
    }
};
exports.AnalyticsService = AnalyticsService;
exports.AnalyticsService = AnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnalyticsService);
//# sourceMappingURL=analytics.service.js.map