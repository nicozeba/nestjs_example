import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Book } from 'src/books/schemas/books.schema';


export type LibraryDocument = Library & Document;

@Schema()
export class Library {
  @Prop()
  name: string;

  @Prop({ type: Types.ObjectId, ref: Book.name })
  books: [Book];
}

export const LibrarySchema = SchemaFactory.createForClass(Library);