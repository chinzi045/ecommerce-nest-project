import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { Category } from 'src/categories/entity/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])],
  exports: [],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductsModule {}
