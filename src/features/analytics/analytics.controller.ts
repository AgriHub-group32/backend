import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { AnalyticsService } from './analytics.service';
import type { user } from '../../generated/prisma/index';

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
