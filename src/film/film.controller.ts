import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmDto } from '../dto/film.dto';

@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get('/')
  @HttpCode(200)
  async getAll() {
    return this.filmService.getAll();
  }

  @Post('/add')
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: FilmDto) {
    return this.filmService.add(dto);
  }

  @Put('/update')
  @UsePipes(new ValidationPipe())
  async check(@Body() dto: FilmDto) {
    return this.filmService.update(dto);
  }
}
