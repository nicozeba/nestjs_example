import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Library, LibraryDocument } from './schemas/libraries.schema';
import { Book } from 'src/books/schemas/books.schema';

@Injectable()
export class LibraryService {
  constructor(@InjectModel(Library.name) private libraryModel: Model<LibraryDocument>) {}

  async create(library: Library): Promise<Library> {
    const createdCat = new this.libraryModel(library);
    return createdCat.save();
  }

  async findAll(query: any): Promise<Library[]> {
    return this.libraryModel.find(query).populate('books', null, Book.name).exec();
  }

  async findById(id: string){
    return this.libraryModel.findById(id);
  }

  async findByAuthor(authorName: string){
    return this.libraryModel.find({ author: authorName });
  }

  async update(id: string, library: Library){
    return this.libraryModel.findByIdAndUpdate(id, library);
  }

  async delete(id: string){
    return this.libraryModel.findByIdAndDelete(id);
  }
}
