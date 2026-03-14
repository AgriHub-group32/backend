import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { CurrentUser } from '../../common/decorators/current-user.decorator.js';
import { Roles } from '../../common/decorators/roles.decorator.js';
import { OrderService } from './order.service.js';
import { CreateOrderDto } from './dtos/create-order.dto.js';
import type { user } from '../../generated/prisma/index.js';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles('wholesaler')
  create(@CurrentUser() user: user, @Body() dto: CreateOrderDto) {
    return this.orderService.create(user.id, dto);
  }

  @Get()
  getOrders(@CurrentUser() user: user) {
    return this.orderService.getOrders(user.id, user.type);
  }

  @Get('history')
  getHistory(@CurrentUser() user: user) {
    return this.orderService.getHistory(user.id);
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: user) {
    return this.orderService.getById(id, user.id);
  }

  @Patch(':id/accept')
  @UseGuards(RolesGuard)
  @Roles('farmer')
  accept(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: user) {
    return this.orderService.accept(id, user.id);
  }

  @Patch(':id/reject')
  @UseGuards(RolesGuard)
  @Roles('farmer')
  reject(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: user) {
    return this.orderService.reject(id, user.id);
  }

  @Patch(':id/complete')
  @UseGuards(RolesGuard)
  @Roles('farmer')
  complete(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: user) {
    return this.orderService.complete(id, user.id);
  }

  @Patch(':id/cancel')
  @UseGuards(RolesGuard)
  @Roles('wholesaler')
  cancel(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: user) {
    return this.orderService.cancel(id, user.id);
  }
}
