import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FileModule } from './file/file.module';
import { AuthModule } from './auth/auth.module';
import { FilmModule } from './film/film.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [UserModule, FileModule, AuthModule, FilmModule, GenreModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
