import { PartialType } from '@nestjs/mapped-types';
import { CreateReadingBlocDto } from './create-reading_bloc.dto';

export class UpdateReadingBlocDto extends PartialType(CreateReadingBlocDto) {}
