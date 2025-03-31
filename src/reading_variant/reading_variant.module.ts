import { Module } from '@nestjs/common';
import { ReadingVariantService } from './reading_variant.service';
import { ReadingVariantController } from './reading_variant.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [ReadingVariantController],
  providers: [ReadingVariantService],
})
export class ReadingVariantModule {}
