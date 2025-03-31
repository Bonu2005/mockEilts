import { PartialType } from '@nestjs/mapped-types';
import { CreateSpeakingTaskDto } from './create-speaking_task.dto';

export class UpdateSpeakingTaskDto extends PartialType(CreateSpeakingTaskDto) {}
