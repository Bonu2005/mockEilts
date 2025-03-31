import { PartialType } from '@nestjs/mapped-types';
import { CreateSpeakingBlocDto } from './create-speaking_bloc.dto';

export class UpdateSpeakingBlocDto extends PartialType(CreateSpeakingBlocDto) {}
