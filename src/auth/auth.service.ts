import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { AuthDto } from '../dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(dto: AuthDto) {
    const saltOrRounds = 10;
    const passwordHash = await bcrypt.hash(dto.password, saltOrRounds);

    const { password, ...user } = dto;
    return this.prisma.user.create({
      data: {
        ...user,
        passwordHash,
        genres: [],
        films: []
      }
    });
  }

  async check(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email
      }
    });
    if (!user) throw new NotFoundException('Неверный логин или пароль');
    if (await bcrypt.compare(dto.password, user.passwordHash)) {
      return user;
    } else {
      throw new BadRequestException('Неверный логин или пароль');
    }
  }
}
