import { Module } from '@nestjs/common';
import { SpeakingVariantService } from './speaking_variant.service';
import { SpeakingVariantController } from './speaking_variant.controller';

@Module({
  controllers: [SpeakingVariantController],
  providers: [SpeakingVariantService],
})
export class SpeakingVariantModule {}
