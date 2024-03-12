import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { encodedPassword } from 'src/utils/encrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const Password: string = await encodedPassword(createUserDto.password);
    console.log(Password);
    const data = this.userRepo.create({ ...createUserDto, password: Password });
    const sdata = await this.userRepo.save(data);
    return {
      success: 'data stored successfuly',
      status: 200,
    };
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOnebyEmail(email: string) {
    const finOne = await this.userRepo.findOne({ where: { email: email } });
    // console.log(finOne);
    if (!finOne) throw new NotFoundException('User not found');
    return finOne;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
