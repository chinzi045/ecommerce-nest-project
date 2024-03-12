import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { Compare } from 'src/utils/encrypt';

@Injectable()
export class authService {
  constructor(private readonly userService: UserService) {}
  async ValidateUser(email: string, password: string) {
    const user = await this.userService.findOnebyEmail(email);

    if (!user) {
      throw new NotFoundException('user not exist');
    }

    const passwordComaprison = await Compare(password, user.password);

    if (passwordComaprison) {
      return user;
    }

    throw new UnauthorizedException('Invalid Username or Password');
  }
}
