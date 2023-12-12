import {
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from '../dto/auth.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/auth/register')
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: AuthDto) {
    return this.authService.register(dto);
  }

  @Post('/auth/login')
  @UsePipes(new ValidationPipe())
  async check(@Body() dto: AuthDto) {
    return this.authService.check(dto);
  }
}
