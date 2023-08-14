import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: '*',
  });

  const port = process.env.PORT ? Number(process.env.PORT) : 3333;

  await app.listen(port, () => {
    console.log(`Server running on port ${port} 🚀`);
  });
}
bootstrap();
