import { Injectable } from '@nestjs/common';
import { CreateSpeakingTaskDto } from './dto/create-speaking_task.dto';
import { UpdateSpeakingTaskDto } from './dto/update-speaking_task.dto';

@Injectable()
export class SpeakingTaskService {
  create(createSpeakingTaskDto: CreateSpeakingTaskDto) {
    return 'This action adds a new speakingTask';
  }

  findAll() {
    return `This action returns all speakingTask`;
  }

  findOne(id: number) {
    return `This action returns a #${id} speakingTask`;
  }

  update(id: number, updateSpeakingTaskDto: UpdateSpeakingTaskDto) {
    return `This action updates a #${id} speakingTask`;
  }

  remove(id: number) {
    return `This action removes a #${id} speakingTask`;
  }
}
