import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FilmDto } from '../dto/film.dto';

@Injectable()
export class FilmService {
  constructor(private readonly prisma: PrismaService) {}

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
