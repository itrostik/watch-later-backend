import { Controller, Get, HttpCode } from '@nestjs/common';
import { GenreService } from './genre.service';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  @HttpCode(200)
  async getAll() {
    return this.genreService.getAll();
  }
}
