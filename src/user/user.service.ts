import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return this.prisma.user.findMany();
  }

  async getUser(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id
      }
    });
    if (!user) throw new NotFoundException('Пользователь с таким id не найден');
    return user;
  }

  async update(dto: UserDto) {
    this.prisma.user.update({
      where: {
        email: dto.email
      },
      data: JSON.stringify(dto)
    });
  }
}
