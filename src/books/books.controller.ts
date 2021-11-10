import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BookService } from './books.service';
import { Book } from './schemas/books.schema';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() book: Book) {
    await this.bookService.create(book);
  }

  @Get()
  async findAll(@Query() query): Promise<Book[]> {
    return this.bookService.findAll(query);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Book> {
    return this.bookService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() book: Book){
    return this.bookService.update(id, book);
  }

  @Delete(':id')
  async delete(@Param('id') id: string){
    return this.bookService.delete(id);
  }
}