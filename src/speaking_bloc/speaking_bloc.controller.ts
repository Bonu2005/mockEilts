import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpeakingBlocService } from './speaking_bloc.service';
import { CreateSpeakingBlocDto } from './dto/create-speaking_bloc.dto';
import { UpdateSpeakingBlocDto } from './dto/update-speaking_bloc.dto';

@Controller('speaking-bloc')
export class SpeakingBlocController {
  constructor(private readonly speakingBlocService: SpeakingBlocService) {}

  @Post()
  create(@Body() createSpeakingBlocDto: CreateSpeakingBlocDto) {
    return this.speakingBlocService.create(createSpeakingBlocDto);
  }

  @Get()
  findAll() {
    return this.speakingBlocService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.speakingBlocService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpeakingBlocDto: UpdateSpeakingBlocDto) {
    return this.speakingBlocService.update(+id, updateSpeakingBlocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speakingBlocService.remove(+id);
  }
}
