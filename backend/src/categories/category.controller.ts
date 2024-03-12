import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { categoryService } from './category.service';
import { CategoryDto } from './category.dto';

@Controller('/category')
export class CategoryController {
  constructor(private readonly categoryService: categoryService) {}

  @Post()
  CreateCategory(@Body() data: CategoryDto) {
    return this.categoryService.AddCategory(data);
  }

  @Get()
  GetCategories() {
    return this.categoryService.AllCategory();
  }

  @Get(':id')
  GetOneCategory(@Param('id') id: number) {
    return this.categoryService.GetOne(id);
  }

  @Put(':id')
  Updatee(@Param('id') id: number, @Body() data: CategoryDto) {
    return this.categoryService.update(id, data);
  }

  @Delete(':id')
  DeleteOne(@Param('id') id: number) {
    return this.categoryService.delete(id);
  }
}
