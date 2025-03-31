import { PartialType } from '@nestjs/mapped-types';
import { CreateReadingQueDto } from './create-reading_que.dto';

export class UpdateReadingQueDto extends PartialType(CreateReadingQueDto) {}
