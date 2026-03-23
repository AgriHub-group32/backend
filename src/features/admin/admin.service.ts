import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class AdminService {
  constructor(private readonly db: PrismaService) {}

  async getUsers(page: number = 1, limit: number = 20, type?: string, isActive?: boolean) {
    const where: any = {};
    if (type) where.type = type;
    if (isActive !== undefined) where.is_active = isActive;

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

  async verifyUser(userId: number) {
    const user = await this.db.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');
    if (user.is_verified) throw new BadRequestException('User is already verified');

    await this.db.user.update({ where: { id: userId }, data: { is_verified: true } });
    return { message: 'User verified successfully' };
  }

  async deactivateUser(userId: number) {
    const user = await this.db.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    await this.db.user.update({ where: { id: userId }, data: { is_active: false } });
    return { message: 'User deactivated' };
  }

  async getHarvests(page: number = 1, limit: number = 20) {
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

  async removeHarvest(harvestId: number) {
    const harvest = await this.db.harvest.findUnique({ where: { id: harvestId } });
    if (!harvest) throw new NotFoundException('Harvest not found');

    await this.db.harvest_image.deleteMany({ where: { harvest_id: harvestId } });
    await this.db.harvest.delete({ where: { id: harvestId } });
    return { message: 'Harvest removed' };
  }

  async getOrders(page: number = 1, limit: number = 20, status?: string) {
    const where: any = {};
    if (status) where.status = status;

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

  async resolveDispute(orderId: number) {
    const order = await this.db.order.findUnique({ where: { id: orderId } });
    if (!order) throw new NotFoundException('Order not found');

    await this.db.order.update({
      where: { id: orderId },
      data: { status: 'completed' },
    });
    return { message: 'Dispute resolved, order marked as completed' };
  }
}
