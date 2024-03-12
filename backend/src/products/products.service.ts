import { Injectable, NotFoundException, UploadedFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { Repository } from 'typeorm';
import { productDto } from './dto/product.dto';
import { diskStorage } from 'multer';
import { Category } from 'src/categories/entity/category.entity';
import { stringify } from 'querystring';

@Injectable()
export class ProductService {
  // categoryRepo: any;
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
    @InjectRepository(Category) // Inject Category repository
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async create(image: Array<Express.Multer.File>, body: productDto) {
    const path = image.map((image) => image.path);
    body.images = path;
    const imageJson = JSON.stringify(path);
    const product = new Product();
    product.name = body.name;
    product.price = body.price;
    product.discount = body.description;
    product.description = body.description;
    product.images = imageJson;
    // console.log(imageJson);

    const categoryId = body.categoryId;
    const category = await this.categoryRepo.findOne({
      where: { id: categoryId },
    }); // Fetch the Category entity

    if (!category) {
      throw new Error('Category not found');
    }

    product.category = category;
    const data = this.productRepo.create(product);
    await this.productRepo.save(data);
    return data;
  }

  findAll() {
    return this.productRepo.find({ relations: ['category'] });
  }

  async findOnly(id: number) {
    const data = await this.productRepo.findOne({
      where: { id: id },
      relations: ['category'],
    });
    return data;
  }

  async updateOne(
    id: number,
    body: productDto,
    images: Array<Express.Multer.File>,
  ) {
    const imagesPath = images.map((images) => images.path);
    // console.log(imagesPath);
    const JsonImages = JSON.stringify(imagesPath);

    const existingProduct = await this.productRepo.findOne({ where: { id } });
    // console.log(existingProduct, 'eeeeeeeeeee');

    if (!existingProduct) {
      throw new Error('Product not found');
    }

    existingProduct.name = body.name;
    existingProduct.price = body.price;
    existingProduct.discount = body.discount;
    existingProduct.description = body.description;
    existingProduct.images = JsonImages;
    const categoryId = body.categoryId;
    if (!categoryId) throw new NotFoundException('category is not exist ');
    const category = await this.categoryRepo.findOne({
      where: { id: categoryId },
    });
    existingProduct.category = category;

    const updatedData = await this.productRepo.save(existingProduct);
    return updatedData;
  }

  async delteOne(id: number) {
    return await this.productRepo.delete(id);
  }
}
