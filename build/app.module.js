"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./database/database.module");
const auth_module_1 = require("./features/auth/auth.module");
const account_module_1 = require("./features/account/account.module");
const harvest_module_1 = require("./features/harvest/harvest.module");
const marketplace_module_1 = require("./features/marketplace/marketplace.module");
const order_module_1 = require("./features/order/order.module");
const payment_module_1 = require("./features/payment/payment.module");
const review_module_1 = require("./features/review/review.module");
const chat_module_1 = require("./features/chat/chat.module");
const call_module_1 = require("./features/call/call.module");
const analytics_module_1 = require("./features/analytics/analytics.module");
const admin_module_1 = require("./features/admin/admin.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            account_module_1.AccountModule,
            harvest_module_1.HarvestModule,
            marketplace_module_1.MarketplaceModule,
            order_module_1.OrderModule,
            payment_module_1.PaymentModule,
            review_module_1.ReviewModule,
            chat_module_1.ChatModule,
            call_module_1.CallModule,
            analytics_module_1.AnalyticsModule,
            admin_module_1.AdminModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map