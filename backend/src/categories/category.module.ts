import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entity/category.entity';
import { categoryService } from './category.service';
import { CategoryController } from './category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [categoryService],
  controllers: [CategoryController],
  exports: [],
})
export class CtaegoryModule {}
