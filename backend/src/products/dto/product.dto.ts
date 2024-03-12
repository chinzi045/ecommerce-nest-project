import { Category } from 'src/categories/entity/category.entity';

export class productDto {
  name: string;

  price: string;

  discount: string;

  description: string;

  images: string[];

  categoryId: number;
}
