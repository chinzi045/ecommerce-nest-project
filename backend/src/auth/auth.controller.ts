import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { Login_dto } from 'src/user/dto/login-user.dto';
import { authService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
// import { Request } from 'express';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class authController {
  constructor(private readonly authservice: authService) {}
  @Post('/login')
  // @UseGuards(AuthGuard('local'))
  async SignIn(@Req() req, @Body() loginDto: Login_dto) {
    const { email, password } = loginDto;

    console.log(req.session.user);

    const user = await this.authservice.ValidateUser(email, password);

    if (!req.session.user) {
      req.session.user = user;
      console.log('stored');
    }

    return user;

    //   const user: User = req.user;
    //   const payload = {
    //     userId: user.id,
    //     userName: user.name,
    //     userEmail: user.email,
    //   };

    //   return { token: this.jwtService.sign(payload) };
    // }
  }
}
