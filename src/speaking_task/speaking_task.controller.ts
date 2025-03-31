import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpeakingTaskService } from './speaking_task.service';
import { CreateSpeakingTaskDto } from './dto/create-speaking_task.dto';
import { UpdateSpeakingTaskDto } from './dto/update-speaking_task.dto';

@Controller('speaking-task')
export class SpeakingTaskController {
  constructor(private readonly speakingTaskService: SpeakingTaskService) {}

  @Post()
  create(@Body() createSpeakingTaskDto: CreateSpeakingTaskDto) {
    return this.speakingTaskService.create(createSpeakingTaskDto);
  }

  @Get()
  findAll() {
    return this.speakingTaskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.speakingTaskService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpeakingTaskDto: UpdateSpeakingTaskDto) {
    return this.speakingTaskService.update(+id, updateSpeakingTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speakingTaskService.remove(+id);
  }
}
