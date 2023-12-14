import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from '../dto/user.dto';
import { FilmDto } from '../dto/film.dto';

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

  @Put('/users')
  async updateUser(@Body() dto: UserDto) {
    return this.userService.update(dto);
  }

  @Patch('/users')
  async addUserFilms(@Body() info: FilmDto & Pick<UserDto, 'email'>) {
    return this.userService.addUserFilms(info);
  }

  @Patch('/users/film')
  async updateUserFilm(
    @Body() info: Pick<UserDto, 'films'> & Pick<UserDto, 'email'>
  ) {
    return this.userService.updateUserFilm(info);
  }
}
