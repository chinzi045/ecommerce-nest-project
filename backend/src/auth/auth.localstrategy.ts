import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { compare } from 'bcrypt';
import { response } from 'express';
import { Strategy } from 'passport-local';
import { User } from 'src/user/entities/user.entity';    

import { UserService } from 'src/user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userservice: UserService) {
    super({ usernameField: 'email', passwordField: 'password' });
  }

  async validate(email: string, password: string) {
    const userExisting: User = await this.userservice.findOnebyEmail(email);
    console.log(userExisting);

    if (!userExisting) {
      throw new NotFoundException('user not exist');
    }

    const hashPassword = userExisting.password;
    const isCorrectPassword = await compare(password, hashPassword);

    if (isCorrectPassword) {
      return userExisting;
    }

    throw new UnauthorizedException({
      statusCode: 422,
      message: 'Invalid Username Or Password',
    });
  }
}
