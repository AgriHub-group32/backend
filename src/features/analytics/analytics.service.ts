import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private readonly db: PrismaService) {}

  async getSalesAnalytics(farmerId: number) {
    const orders = await this.db.order.findMany({
      where: {
        harvest: { owner_id: farmerId },
        status: 'completed',
      },
      include: { harvest: { select: { name: true, category: true } } },
    });

    const totalRevenue = orders.reduce((sum, o) => sum + Number(o.total_price), 0);
    const totalOrders = orders.length;

    // Group by category
    const byCategory: Record<string, { count: number; revenue: number }> = {};
    for (const order of orders) {
      const cat = order.harvest.category;
      if (!byCategory[cat]) byCategory[cat] = { count: 0, revenue: 0 };
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
    const [totalUsers, totalFarmers, totalWholesalers, totalHarvests, activeListings, totalOrders, completedOrders, totalRevenue] =
      await Promise.all([
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
}
