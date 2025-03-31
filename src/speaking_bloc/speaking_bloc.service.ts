import { Injectable } from '@nestjs/common';
import { CreateSpeakingBlocDto } from './dto/create-speaking_bloc.dto';
import { UpdateSpeakingBlocDto } from './dto/update-speaking_bloc.dto';

@Injectable()
export class SpeakingBlocService {
  create(createSpeakingBlocDto: CreateSpeakingBlocDto) {
    return 'This action adds a new speakingBloc';
  }

  findAll() {
    return `This action returns all speakingBloc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} speakingBloc`;
  }

  update(id: number, updateSpeakingBlocDto: UpdateSpeakingBlocDto) {
    return `This action updates a #${id} speakingBloc`;
  }

  remove(id: number) {
    return `This action removes a #${id} speakingBloc`;
  }
}
