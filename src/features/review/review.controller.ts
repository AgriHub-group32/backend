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
import { CurrentUser } from '../../common/decorators/current-user.decorator.js';
import { ReviewService } from './review.service.js';
import { CreateReviewDto } from './dtos/create-review.dto.js';
import type { user } from '../../generated/prisma/index.js';

@Controller('reviews')
@UseGuards(JwtAuthGuard)
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  create(@CurrentUser() user: user, @Body() dto: CreateReviewDto) {
    return this.reviewService.create(user.id, dto);
  }

  @Get('my-reviews')
  getMyReviews(@CurrentUser() user: user) {
    return this.reviewService.getMyReviews(user.id);
  }

  @Get('user/:userId')
  getForUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.reviewService.getForUser(userId);
  }

  @Get('order/:orderId')
  getForOrder(@Param('orderId', ParseIntPipe) orderId: number) {
    return this.reviewService.getForOrder(orderId);
  }
}
