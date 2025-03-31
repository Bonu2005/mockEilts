import { Module } from '@nestjs/common';
import { ReadingBlocService } from './reading_bloc.service';
import { ReadingBlocController } from './reading_bloc.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [ReadingBlocController],
  providers: [ReadingBlocService],
})
export class ReadingBlocModule {}
