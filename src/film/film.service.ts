import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FilmDto } from '../dto/film.dto';

@Injectable()
export class FilmService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return this.prisma.film.findMany();
  }

  async getByName(name: string) {
    name = name.toLowerCase().trim();
    if (name.length > 0) {
      const films = await this.getAll();
      const filteredFilms = films.filter((film) => {
        if (film.name.toLowerCase().includes(name)) {
          return film;
        }
      });
      console.log(filteredFilms);
      return filteredFilms;
    }
    return [];
  }

  async add(dto: FilmDto) {
    return this.prisma.film.create({
      data: dto
    });
  }

  async update(dto: FilmDto) {
    return this.prisma.film.update({
      where: {
        name: dto.name
      },
      data: dto
    });
  }
}
