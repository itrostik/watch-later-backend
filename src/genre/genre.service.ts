import { Injectable } from '@nestjs/common';
import prisma from '../main';

@Injectable()
export class GenreService {
  async getAll() {
    return prisma.genre.findMany();
  }
}
