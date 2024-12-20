import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ // dto validation
    whitelist: true // trim extra params in the request
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
