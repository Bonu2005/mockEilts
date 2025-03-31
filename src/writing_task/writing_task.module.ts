import { Module } from '@nestjs/common';
import { WritingTaskService } from './writing_task.service';
import { WritingTaskController } from './writing_task.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [WritingTaskController],
  providers: [WritingTaskService],
})
export class WritingTaskModule {}
