import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { CurrentUser } from '../../common/decorators/current-user.decorator.js';
import { Roles } from '../../common/decorators/roles.decorator.js';
import { PaymentService } from './payment.service.js';
import { CreatePaymentDto } from './dtos/create-payment.dto.js';
import type { user } from '../../generated/prisma/index.js';

@Controller('payments')
@UseGuards(JwtAuthGuard)
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  create(@CurrentUser() user: user, @Body() dto: CreatePaymentDto) {
    return this.paymentService.create(user.id, dto);
  }

  @Get()
  getPayments(@CurrentUser() user: user) {
    return this.paymentService.getPayments(user.id);
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: user) {
    return this.paymentService.getById(id, user.id);
  }

  @Post(':id/confirm')
  @UseGuards(RolesGuard)
  @Roles('admin')
  confirm(@Param('id', ParseIntPipe) id: number) {
    return this.paymentService.confirm(id);
  }

  @Post(':id/refund')
  @UseGuards(RolesGuard)
  @Roles('admin')
  refund(@Param('id', ParseIntPipe) id: number) {
    return this.paymentService.refund(id);
  }
}
