import {
  Controller,
  Post,
  UseInterceptors,
  Body,
  UploadedFiles,
  BadRequestException,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import {
  AnyFilesInterceptor,
  FileInterceptor,
  FilesInterceptor,
  NoFilesInterceptor,
} from '@nestjs/platform-express';
import { ProductService } from './products.service';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { CategoryDto } from 'src/categories/category.dto';
import * as path from 'path';
import { productDto } from './dto/product.dto';

@Controller('/field')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Put('/updated/:id')
  @UseInterceptors(
    FilesInterceptor('images', 10, {
      storage: diskStorage({
        destination: './uploads/products',
        filename: (req, file, cb) => {
          if (!file) {
            return cb(new BadRequestException('no file provided'), '');
          }
          const extension = file.originalname.split('.').pop();
          const hash = uuidv4().replaceAll('-', '');
          const filename = `${hash}.${extension}`;
          cb(null, filename);
        },
      }),
    }),
  )
  Update(
    @Param('id') id: number,
    @UploadedFiles() images: Array<Express.Multer.File>,
    @Body() body: productDto,
  ) {
    // console.log(images, body);
    return this.productService.updateOne(id, body, images);
    // return { id };
  }

  @Post('/created')
  @UseInterceptors(
    FilesInterceptor('images', 10, {
      storage: diskStorage({
        destination: './uploads/products',
        filename: (req, file, cb) => {
          if (!file) {
            return cb(new BadRequestException('No file provided'), '');
          }
          const extension = file.originalname.split('.').pop();
          const hash = uuidv4().replaceAll('-', '');
          const filename = `${hash}.${extension}`;
          cb(null, filename);
        },
      }),
    }),
  )
  async uploadFileAndFields(
    @UploadedFiles() images: Array<Express.Multer.File>,
    @Body() body: productDto,
  ) {
    return this.productService.create(images, body);
    // return { images, body };
  }

  @Get()
  find() {
    return this.productService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOnly(id);
  }

  @Delete(':id')
  DeleteItem(@Param('id') id: number) {
    return this.productService.delteOne(id);
  }
}
