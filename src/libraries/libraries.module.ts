import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LibraryController } from './libraries.controller';
import { LibraryService } from './libraries.service';
import { Library, LibrarySchema } from './schemas/libraries.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Library.name, schema: LibrarySchema }])],
  controllers: [LibraryController],
  providers: [LibraryService],
})
export class LibraryModule {}