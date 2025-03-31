import { PartialType } from '@nestjs/mapped-types';
import { CreateReadingBlocQueDto } from './create-reading_bloc_que.dto';

export class UpdateReadingBlocQueDto extends PartialType(CreateReadingBlocQueDto) {}
