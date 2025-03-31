import { Module } from '@nestjs/common';
import { ReadingBlocQuesService } from './reading_bloc_ques.service';
import { ReadingBlocQuesController } from './reading_bloc_ques.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [ReadingBlocQuesController],
  providers: [ReadingBlocQuesService],
})
export class ReadingBlocQuesModule {}
