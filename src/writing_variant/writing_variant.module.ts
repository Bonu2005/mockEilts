import { Module } from '@nestjs/common';
import { WritingVariantService } from './writing_variant.service';
import { WritingVariantController } from './writing_variant.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [WritingVariantController],
  providers: [WritingVariantService],
})
export class WritingVariantModule {}
