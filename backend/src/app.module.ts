import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { authModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { ProductsModule } from './products/products.module';
import { CtaegoryModule } from './categories/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './db.source';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register(),
    TypeOrmModule.forRoot(config),
    UserModule,
    authModule,
    ProductsModule,
    CtaegoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
