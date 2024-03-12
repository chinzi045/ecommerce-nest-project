import { IsNotEmpty, IsString } from 'class-validator';
import { Product } from 'src/products/entity/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  title: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @OneToMany(() => Product, (product) => product.category)
  product: Product[];
}
