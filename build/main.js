"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const appException_filter_1 = require("./filters/appException.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    app.useGlobalFilters(new appException_filter_1.AppExceptionFilter());
    const root = process.cwd();
    app.useStaticAssets((0, path_1.join)(root, 'uploads'), { prefix: '/uploads' });
    app.useStaticAssets((0, path_1.join)(root, 'public'), {
        prefix: '/',
        index: 'index.html',
    });
    app.enableCors();
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`Server running on http://localhost:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map