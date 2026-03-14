import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { CurrentUser } from '../../common/decorators/current-user.decorator.js';
import { Roles } from '../../common/decorators/roles.decorator.js';
import { AnalyticsService } from './analytics.service.js';
import type { user } from '../../generated/prisma/index.js';

@Controller('analytics')
@UseGuards(JwtAuthGuard)
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('sales')
  @UseGuards(RolesGuard)
  @Roles('farmer')
  getSalesAnalytics(@CurrentUser() user: user) {
    return this.analyticsService.getSalesAnalytics(user.id);
  }

  @Get('demand')
  getDemandTrends() {
    return this.analyticsService.getDemandTrends();
  }

  @Get('popular')
  getPopularProducts() {
    return this.analyticsService.getPopularProducts();
  }

  @Get('platform')
  @UseGuards(RolesGuard)
  @Roles('admin')
  getPlatformMetrics() {
    return this.analyticsService.getPlatformMetrics();
  }
}
