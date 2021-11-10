import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { LibraryService } from './libraries.service';
import { Library } from './schemas/libraries.schema';

@Controller('libraries')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  async create(@Body() library: Library) {
    await this.libraryService.create(library);
  }

  @Get()
  async findAll(@Query() query): Promise<Library[]> {
    return this.libraryService.findAll(query);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Library> {
    return this.libraryService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() library: Library){
    return this.libraryService.update(id, library);
  }

  @Delete(':id')
  async delete(@Param('id') id: string){
    return this.libraryService.delete(id);
  }
}