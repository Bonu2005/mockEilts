import { PartialType } from '@nestjs/mapped-types';
import { CreateWritingBlocDto } from './create-writing_bloc.dto';

export class UpdateWritingBlocDto extends PartialType(CreateWritingBlocDto) {}
