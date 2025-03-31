import { PartialType } from '@nestjs/mapped-types';
import { CreateSpeakingVariantDto } from './create-speaking_variant.dto';

export class UpdateSpeakingVariantDto extends PartialType(CreateSpeakingVariantDto) {}
