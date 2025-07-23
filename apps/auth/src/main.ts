import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { AuthModule } from './auth.module';
dotenv.config();

async function bootstrap() {
  const microservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AuthModule, {
      transport: Transport.TCP,
      options: {
        port: Number(process.env.USER_TCP_PORT) || 3003,
      },
    });
  microservice.useGlobalPipes(new ValidationPipe());

  const app = await NestFactory.create(AuthModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Users API')
    .setDescription('The Users Service API descriptions')
    .setVersion('1.0')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.USER_HTTP_PORT || 4003); // Swagger UI available at http://localhost:3005/swagger
  await microservice.listen();
}
bootstrap();
