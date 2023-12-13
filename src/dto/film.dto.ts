import { IsArray, IsString, MinLength } from 'class-validator';

export class FilmDto {
  @IsString()
  name: string;

  @MinLength(30, {
    message: 'Слишком короткое описание, добавьте ещё!'
  })
  @IsString()
  description: string;

  @IsString()
  posterUrl: string;

  @IsString()
  year: string;

  @IsArray()
  genres: string[];

  @IsArray()
  reviews?: number[];
}
