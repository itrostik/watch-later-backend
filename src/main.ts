import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.$connect();
export default prisma;
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(4444);
}
bootstrap();
