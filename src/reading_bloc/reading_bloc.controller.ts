import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReadingBlocService } from './reading_bloc.service';
import { CreateReadingBlocDto } from './dto/create-reading_bloc.dto';
import { UpdateReadingBlocDto } from './dto/update-reading_bloc.dto';

@Controller('reading-bloc')
export class ReadingBlocController {
  constructor(private readonly readingBlocService: ReadingBlocService) {}

  @Post()
  create(@Body() createReadingBlocDto: CreateReadingBlocDto) {
    return this.readingBlocService.create(createReadingBlocDto);
  }

  @Get()
  findAll() {
    return this.readingBlocService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.readingBlocService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReadingBlocDto: UpdateReadingBlocDto) {
    return this.readingBlocService.update(id, updateReadingBlocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.readingBlocService.remove(id);
  }
}
