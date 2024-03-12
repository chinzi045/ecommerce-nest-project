import { IsNotEmpty, IsString } from 'class-validator';
import { Category } from 'src/categories/entity/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  price: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  discount: string;

  @Column()
  // @IsString()
  @IsNotEmpty()
  description: string;
  @Column('json', { nullable: true }) // Nullable since it will be populated later
  images: string;

  @ManyToOne(() => Category, (category) => category.product)
  @JoinColumn({ name: 'categoryId' })
  @IsNotEmpty()
  category: Category;
}
