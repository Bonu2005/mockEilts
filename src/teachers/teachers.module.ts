import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { MailModule } from 'src/mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule,JwtModule,ConfigModule,MailModule],
  controllers: [TeachersController],
  providers: [TeachersService],
})
export class TeachersModule {}
