import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './features/auth/auth.module';
import { AccountModule } from './features/account/account.module';
import { HarvestModule } from './features/harvest/harvest.module';
import { MarketplaceModule } from './features/marketplace/marketplace.module';
import { OrderModule } from './features/order/order.module';
import { PaymentModule } from './features/payment/payment.module';
import { ReviewModule } from './features/review/review.module';
import { ChatModule } from './features/chat/chat.module';
import { CallModule } from './features/call/call.module';
import { AnalyticsModule } from './features/analytics/analytics.module';
import { AdminModule } from './features/admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AuthModule,
    AccountModule,
    HarvestModule,
    MarketplaceModule,
    OrderModule,
    PaymentModule,
    ReviewModule,
    ChatModule,
    CallModule,
    AnalyticsModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
