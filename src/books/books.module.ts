import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from './books.controller';
import { BookService } from './books.service';
import { Book, BookSchema } from './schemas/books.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}