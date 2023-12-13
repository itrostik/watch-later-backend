import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GenreService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return this.prisma.genre.findMany();
  }
}
