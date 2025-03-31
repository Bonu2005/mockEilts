import { Module } from '@nestjs/common';
import { SpeakingTaskService } from './speaking_task.service';
import { SpeakingTaskController } from './speaking_task.controller';

@Module({
  controllers: [SpeakingTaskController],
  providers: [SpeakingTaskService],
})
export class SpeakingTaskModule {}
