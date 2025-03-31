import { Module } from '@nestjs/common';
import { ReadingQuesService } from './reading_ques.service';
import { ReadingQuesController } from './reading_ques.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [ReadingQuesController],
  providers: [ReadingQuesService],
})
export class ReadingQuesModule {}
