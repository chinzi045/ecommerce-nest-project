import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entity/category.entity';
import { Repository } from 'typeorm';
import { CategoryDto } from './category.dto';

@Injectable()
export class categoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async AddCategory(data: CategoryDto) {
    const datas = this.categoryRepo.create(data);
    const nDatas = await this.categoryRepo.save(datas);
    return {
      message: 'Category Created Successfully ',
      success: true,
    };
  }

  AllCategory() {
    return this.categoryRepo.find();
  }

  GetOne(id: number) {
    const data = this.categoryRepo.findOne({ where: { id: id } });
    return data;
  }

  async update(id: number, updatedData: CategoryDto) {
    const data = await this.categoryRepo.findOne({ where: { id: id } });
    const Datas = await this.categoryRepo.save({ ...data, ...updatedData });
    return {
      result: Datas,
      message: 'updated Successfully!',
    };
  }

  delete(id: number) {
    return this.categoryRepo.delete(id);
  }
}
