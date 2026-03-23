import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateOrderDto } from './dtos/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly db: PrismaService) {}

  async create(buyerId: number, dto: CreateOrderDto) {
    const harvest = await this.db.harvest.findUnique({ where: { id: dto.harvest_id } });
    if (!harvest) throw new NotFoundException('Harvest not found');
    if (!harvest.is_available) throw new BadRequestException('Harvest is not available');
    if (harvest.quantity < dto.quantity)
      throw new BadRequestException(`Insufficient quantity. Available: ${harvest.quantity}`);
    if (harvest.owner_id === buyerId)
      throw new BadRequestException('Cannot order your own harvest');

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

  async getOrders(userId: number, userType: string) {
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

    // Farmer: get orders for their harvests
    return this.db.order.findMany({
      where: { harvest: { owner_id: userId } },
      include: {
        harvest: { select: { id: true, name: true, unit: true, category: true } },
        user_order_buyer_idTouser: { select: { id: true, full_name: true } },
      },
      orderBy: { created_at: 'desc' },
    });
  }

  async getById(orderId: number, userId: number) {
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
    if (!order) throw new NotFoundException('Order not found');

    // Only buyer or harvest owner can view
    if (order.buyer_id !== userId && order.harvest.owner_id !== userId)
      throw new ForbiddenException('Not authorized to view this order');

    return order;
  }

  async accept(orderId: number, farmerId: number) {
    const order = await this.getOrderForFarmer(orderId, farmerId);
    if (order.status !== 'pending')
      throw new BadRequestException('Can only accept pending orders');

    // Deduct quantity from harvest
    const harvest = await this.db.harvest.findUnique({ where: { id: order.harvest_id } });
    if (!harvest || harvest.quantity < order.quantity)
      throw new BadRequestException('Insufficient harvest quantity');

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

  async reject(orderId: number, farmerId: number) {
    const order = await this.getOrderForFarmer(orderId, farmerId);
    if (order.status !== 'pending')
      throw new BadRequestException('Can only reject pending orders');

    await this.db.order.update({ where: { id: orderId }, data: { status: 'rejected' } });
    return { message: 'Order rejected' };
  }

  async complete(orderId: number, farmerId: number) {
    const order = await this.getOrderForFarmer(orderId, farmerId);
    if (order.status !== 'accepted')
      throw new BadRequestException('Can only complete accepted orders');

    await this.db.order.update({ where: { id: orderId }, data: { status: 'completed' } });
    return { message: 'Order completed' };
  }

  async cancel(orderId: number, buyerId: number) {
    const order = await this.db.order.findUnique({ where: { id: orderId } });
    if (!order) throw new NotFoundException('Order not found');
    if (order.buyer_id !== buyerId) throw new ForbiddenException('Not the buyer of this order');
    if (order.status !== 'pending')
      throw new BadRequestException('Can only cancel pending orders');

    await this.db.order.update({ where: { id: orderId }, data: { status: 'cancelled' } });
    return { message: 'Order cancelled' };
  }

  async getHistory(userId: number) {
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

  private async getOrderForFarmer(orderId: number, farmerId: number) {
    const order = await this.db.order.findUnique({
      where: { id: orderId },
      include: { harvest: true },
    });
    if (!order) throw new NotFoundException('Order not found');
    if (order.harvest.owner_id !== farmerId)
      throw new ForbiddenException('Not the owner of this harvest');
    return order;
  }
}
