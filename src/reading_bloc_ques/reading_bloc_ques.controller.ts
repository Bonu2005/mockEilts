import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReadingBlocQuesService } from './reading_bloc_ques.service';
import { CreateReadingBlocQueDto } from './dto/create-reading_bloc_que.dto';
import { UpdateReadingBlocQueDto } from './dto/update-reading_bloc_que.dto';

@Controller('reading-bloc-ques')
export class ReadingBlocQuesController {
  constructor(private readonly readingBlocQuesService: ReadingBlocQuesService) {}

  @Post()
  create(@Body() createReadingBlocQueDto: CreateReadingBlocQueDto) {
    return this.readingBlocQuesService.create(createReadingBlocQueDto);
  }

  @Get()
  findAll() {
    return this.readingBlocQuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.readingBlocQuesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReadingBlocQueDto: UpdateReadingBlocQueDto) {
    return this.readingBlocQuesService.update(id, updateReadingBlocQueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.readingBlocQuesService.remove(id);
  }
}
