import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove key-value not define in DTO
      forbidNonWhitelisted: false, // True -> throw error if request not follow DTO
      transform: true, //---> convert to an instance of DTO
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
