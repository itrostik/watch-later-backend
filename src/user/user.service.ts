import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { FilmDto } from '../dto/film.dto';
import prisma from '../main';
@Injectable()
export class UserService {
  async getAll() {
    return prisma.user.findMany();
  }

  async getUser(id: number) {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    });
    if (!user) throw new NotFoundException('Пользователь с таким id не найден');
    return user;
  }

  async update(dto: UserDto) {
    return prisma.user.update({
      where: {
        email: dto.email
      },
      data: {
        name: dto.name,
        description: dto.description,
        avatarUrl: dto.avatarUrl,
        genres: JSON.parse(JSON.stringify(dto.genres))
      }
    });
  }

  async addUserFilms(info: FilmDto & Pick<UserDto, 'email'>) {
    const { email, ...film } = info;
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    });
    const userFilms = JSON.parse(JSON.stringify(user.films));
    console.log(userFilms);
    userFilms.push(film);
    return prisma.user.update({
      where: {
        email: email
      },
      data: {
        films: JSON.parse(JSON.stringify(userFilms))
      }
    });
  }

  async updateUserFilm(info: Pick<UserDto, 'films'> & Pick<UserDto, 'email'>) {
    const { email, ...films } = info;
    return prisma.user.update({
      where: {
        email: email
      },
      data: {
        films: JSON.parse(JSON.stringify(films))
      }
    });
  }
}
