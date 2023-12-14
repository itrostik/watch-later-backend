import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
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

  @Get('/getAll')
  @HttpCode(200)
  async getAll() {
    return this.filmService.getAll();
  }

  @Get('/getById')
  @HttpCode(200)
  async getById(@Param() id: { id: string }) {
    return this.filmService.getById(id);
  }

  @Post('/get')
  @HttpCode(200)
  async getByName(@Body() name: { name: string }) {
    console.log(name);
    return this.filmService.getByName(name.name);
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
