import { Injectable } from '@nestjs/common';
import { FilmDto } from '../dto/film.dto';
import prisma from '../main';

@Injectable()
export class FilmService {
  async getAll() {
    return prisma.film.findMany();
  }

  async getByName(name: string) {
    name = name.toLowerCase().trim();
    if (name.length > 0) {
      const films = await this.getAll();
      return films.filter((film) => {
        if (film.name.toLowerCase().includes(name)) {
          return film;
        }
      });
    }
    return [];
  }

  async getById(id: number) {
    return prisma.film.findFirst({
      where: {
        id
      }
    });
  }

  async add(dto: FilmDto) {
    return prisma.film.create({
      data: dto
    });
  }

  async update(dto: FilmDto) {
    return prisma.film.update({
      where: {
        name: dto.name
      },
      data: dto
    });
  }
}
