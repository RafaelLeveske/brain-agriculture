import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './shared/infra/http/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Brain Agriculture')
    .setDescription('Brain Agriculture Swagger docs')
    .setVersion('1.0')
    .addServer('http://localhost:3000')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
