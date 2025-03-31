import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReadingQuesService } from './reading_ques.service';
import { CreateReadingQueDto } from './dto/create-reading_que.dto';
import { UpdateReadingQueDto } from './dto/update-reading_que.dto';

@Controller('reading-ques')
export class ReadingQuesController {
  constructor(private readonly readingQuesService: ReadingQuesService) {}

  @Post()
  create(@Body() createReadingQueDto: CreateReadingQueDto) {
    return this.readingQuesService.create(createReadingQueDto);
  }

  @Get()
  findAll() {
    return this.readingQuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.readingQuesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReadingQueDto: UpdateReadingQueDto) {
    return this.readingQuesService.update(id, updateReadingQueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.readingQuesService.remove(id);
  }
}
