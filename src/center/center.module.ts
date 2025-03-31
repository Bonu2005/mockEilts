import { Module } from '@nestjs/common';
import { CenterService } from './center.service';
import { CenterController } from './center.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports:[PrismaModule,JwtModule,ConfigModule,MailModule],
  controllers: [CenterController],
  providers: [CenterService,JwtService],
})
export class CenterModule {}
