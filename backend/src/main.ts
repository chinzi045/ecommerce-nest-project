import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.use(
    session({
      secret: 'ahdjggfajgjgjgajgsjgd',
      resave: false,
      saveUninitialized: false,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Ecommerce_websites')
    .setDescription('here is a first verion of ecommerce store')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
