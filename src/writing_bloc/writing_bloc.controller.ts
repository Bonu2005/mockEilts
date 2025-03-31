import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WritingBlocService } from './writing_bloc.service';
import { CreateWritingBlocDto } from './dto/create-writing_bloc.dto';
import { UpdateWritingBlocDto } from './dto/update-writing_bloc.dto';

@Controller('writing-bloc')
export class WritingBlocController {
  constructor(private readonly writingBlocService: WritingBlocService) {}

  @Post()
  create(@Body() createWritingBlocDto: CreateWritingBlocDto) {
    return this.writingBlocService.create(createWritingBlocDto);
  }

  @Get()
  findAll() {
    return this.writingBlocService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.writingBlocService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWritingBlocDto: UpdateWritingBlocDto) {
    return this.writingBlocService.update(id, updateWritingBlocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.writingBlocService.remove(id);
  }
}
