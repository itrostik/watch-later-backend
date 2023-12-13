import { IsArray, IsEmail, IsString, MinLength } from 'class-validator';
import { GenreDto } from './genre.dto';
import { FilmDto } from './film.dto';

export class UserDto {
  @IsEmail()
  email: string;

  @MinLength(6, {
    message: 'Пароль должен быть более 6 символов'
  })
  @IsString()
  password: string;

  @IsString()
  name?: string;

  @IsString()
  avatarUrl?: string;

  @IsString()
  description?: string;

  @IsArray()
  genres?: GenreDto[];

  @IsArray()
  films?: {
    info: FilmDto;
    review: number | null;
    watched: boolean;
  }[];
}
