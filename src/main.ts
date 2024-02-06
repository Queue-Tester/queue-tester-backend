import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    allowedHeaders: '*',
    exposedHeaders: '*',
    methods: '*',
  });
  await app.listen(45184);
}
bootstrap();
