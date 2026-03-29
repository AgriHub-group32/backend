import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { AppExceptionFilter } from './filters/appException.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useGlobalFilters(new AppExceptionFilter());

  // Static assets: uploads and frontend
  const root = process.cwd();
  app.useStaticAssets(join(root, 'uploads'), { prefix: '/uploads' });
  app.useStaticAssets(join(root, 'public'), {
    prefix: '/',
    index: 'index.html',
  });

  app.enableCors();
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Server running on http://localhost:${port}`);
}
bootstrap();
