import { Module } from '@nestjs/common';
import { WritingBlocService } from './writing_bloc.service';
import { WritingBlocController } from './writing_bloc.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [WritingBlocController],
  providers: [WritingBlocService],
})
export class WritingBlocModule {}
