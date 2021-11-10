import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/books.schema';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(book: Book): Promise<Book> {
    const createdCat = new this.bookModel(book);
    return createdCat.save();
  }

  async findAll(query: any): Promise<Book[]> {
    return this.bookModel.find(query).exec();
  }

  async findById(id: string){
    return this.bookModel.findById(id);
  }

  async findByAuthor(authorName: string){
    return this.bookModel.find({ author: authorName });
  }

  async update(id: string, book: Book){
    return this.bookModel.findByIdAndUpdate(id, book);
  }

  async delete(id: string){
    return this.bookModel.findByIdAndDelete(id);
  }
}
