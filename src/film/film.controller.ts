import {
  Body,
  Controller,
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
