import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegionModule } from './region/region.module';
import { CenterModule } from './center/center.module';
import { TeachersModule } from './teachers/teachers.module';
import { GroupModule } from './group/group.module';
import { StudentModule } from './student/student.module';
import { ExamModule } from './exam/exam.module';
import { ResultModule } from './result/result.module';
import { WritingVariantModule } from './writing_variant/writing_variant.module';
import { WritingBlocModule } from './writing_bloc/writing_bloc.module';
import { WritingTaskModule } from './writing_task/writing_task.module';
import { SpeakingTaskModule } from './speaking_task/speaking_task.module';
import { SpeakingVariantModule } from './speaking_variant/speaking_variant.module';
import { SpeakingBlocModule } from './speaking_bloc/speaking_bloc.module';
import { ReadingBlocModule } from './reading_bloc/reading_bloc.module';
import { ReadingVariantModule } from './reading_variant/reading_variant.module';
import { ReadingBlocQuesModule } from './reading_bloc_ques/reading_bloc_ques.module';
import { ReadingQuesModule } from './reading_ques/reading_ques.module';
import { PrismaModule } from './prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [RegionModule, CenterModule, TeachersModule, GroupModule, StudentModule, ExamModule, ResultModule, WritingVariantModule, WritingBlocModule, WritingTaskModule, SpeakingTaskModule, SpeakingVariantModule, SpeakingBlocModule, ReadingBlocModule, ReadingVariantModule, ReadingBlocQuesModule, ReadingQuesModule, PrismaModule,JwtModule.register({}),ConfigModule.forRoot(), MailModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
