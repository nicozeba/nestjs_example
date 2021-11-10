import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './books/books.module';
import { NoteController } from './notes/note.controller';
import { NoteService } from './notes/note.service';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: 'variables.env'}),
    MongooseModule.forRoot(process.env.DB),
    BookModule
  ],
  controllers: [AppController, NoteController],
  providers: [AppService, NoteService],
})
export class AppModule {}
