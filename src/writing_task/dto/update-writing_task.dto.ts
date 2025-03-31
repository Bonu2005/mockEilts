import { PartialType } from '@nestjs/mapped-types';
import { CreateWritingTaskDto } from './create-writing_task.dto';

export class UpdateWritingTaskDto extends PartialType(CreateWritingTaskDto) {}
