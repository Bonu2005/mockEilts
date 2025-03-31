import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReadingBlocDto } from './dto/create-reading_bloc.dto';
import { UpdateReadingBlocDto } from './dto/update-reading_bloc.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReadingBlocService {
  constructor(private prisma:PrismaService){}
 async create(createReadingBlocDto: CreateReadingBlocDto) {
    try {
    return  await this.prisma.reading_Bloc.create({data:createReadingBlocDto})
    } catch (error) {
     throw new BadRequestException()
    }
  }

 async findAll() {
    try {
      let find = await this.prisma.reading_Bloc.findMany()
      return find
    } catch (error) {
      throw new BadRequestException()
    }
  }

 async findOne(id: string) {
   try {
    let find = await this.prisma.reading_Bloc.findUnique({where:{id}})
    if(!find){
      return {message:"No data"}
    }
    return find
   } catch (error) {
    throw new BadRequestException()
   }
  }

 async update(id: string, updateReadingBlocDto: UpdateReadingBlocDto) {
   try {
    let find = await this.prisma.reading_Bloc.findUnique({where:{id}})
    if(!find){
      return {message:"No data"}
    }
    let updated = await this.prisma.reading_Bloc.update({where:{id},data:updateReadingBlocDto})
    return updated
   } catch (error) {
    throw new BadRequestException()
   }
  }

  remove(id: string) {
    return `This action removes a #${id} readingBloc`;
  }
}
