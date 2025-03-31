import { Module } from '@nestjs/common';
import { SpeakingBlocService } from './speaking_bloc.service';
import { SpeakingBlocController } from './speaking_bloc.controller';

@Module({
  controllers: [SpeakingBlocController],
  providers: [SpeakingBlocService],
})
export class SpeakingBlocModule {}
