import { Injectable } from '@nestjs/common';
import { CreateSpeakingVariantDto } from './dto/create-speaking_variant.dto';
import { UpdateSpeakingVariantDto } from './dto/update-speaking_variant.dto';

@Injectable()
export class SpeakingVariantService {
  create(createSpeakingVariantDto: CreateSpeakingVariantDto) {
    return 'This action adds a new speakingVariant';
  }

  findAll() {
    return `This action returns all speakingVariant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} speakingVariant`;
  }

  update(id: number, updateSpeakingVariantDto: UpdateSpeakingVariantDto) {
    return `This action updates a #${id} speakingVariant`;
  }

  remove(id: number) {
    return `This action removes a #${id} speakingVariant`;
  }
}
