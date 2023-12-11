import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDto } from './user.dto';

import * as bcrypt from 'bcrypt';

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

  async create(dto: UserDto) {
    const saltOrRounds = 10;
    const passwordHash = await bcrypt.hash(dto.password, saltOrRounds);

    const { password, ...user } = dto;
    return this.prisma.user.create({
      data: {
        ...user,
        passwordHash
      }
    });
  }

  async check(dto: UserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email
      }
    });
    if (!user) throw new NotFoundException('Неверный логин или пароль');
    const isValidatePassword = await bcrypt.compare(
      dto.password,
      user.passwordHash
    );
    return true;
  }
}
