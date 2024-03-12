import { IsNotEmpty, IsString } from 'class-validator';

export class Login_dto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
