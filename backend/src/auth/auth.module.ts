import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { authController } from './auth.controller';
import { authService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './auth.localstrategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configservice: ConfigService) => ({
        secret: configservice.get('SECRET_KEY'),
        signOptions: {
          expiresIn: '7d',
        },
      }),
    }),
  ],
  exports: [],
  providers: [authService, LocalStrategy],
  controllers: [authController],
})
export class authModule {}
