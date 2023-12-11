import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users/:id')
  async getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }

  @Get('/users')
  async getAll() {
    return this.userService.getAll();
  }

  @Post('/users')
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: UserDto) {
    return this.userService.create(dto);
  }

  @Post('/users/check')
  @UsePipes(new ValidationPipe())
  async check(@Body() dto: UserDto) {
    return this.userService.check(dto);
  }
}
