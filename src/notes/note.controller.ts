import { Body, Controller, Get, Post } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './interfaces/note.interface';


@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get()
  async findAll(): Promise<Note[]>{
    return this.noteService.findAll();
  }

  @Post()
  async create(@Body() note: Note){
    this.noteService.create(note);
  }
}
