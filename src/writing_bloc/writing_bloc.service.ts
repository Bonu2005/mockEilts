import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateWritingBlocDto } from './dto/create-writing_bloc.dto';
import { UpdateWritingBlocDto } from './dto/update-writing_bloc.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WritingBlocService {
  constructor(private prisma:PrismaService){}
 async create(createWritingBlocDto: CreateWritingBlocDto) {
    try {
      return await this.prisma.writing_Bloc.create({data:createWritingBlocDto})
    } catch (error) {
      throw new BadRequestException()
    }
  }

 async findAll() {
    try {
      return await this.prisma.writing_Bloc.findMany()
    } catch (error) {
      throw new BadRequestException()
    }
  }

 async findOne(id: string) {
    try {
      let find = await this.prisma.writing_Bloc.findUnique({where:{id}})
      if(!find){
        return new NotFoundException("No data")
      }
      return find
    } catch (error) {
      throw new BadRequestException()
    }
  }

 async update(id: string, updateWritingBlocDto: UpdateWritingBlocDto) {
    try {
      let find = await this.prisma.writing_Bloc.findUnique({where:{id}})
      if(!find){
        return new NotFoundException("No data")
      }
      return await this.prisma.writing_Bloc.update({where:{id},data:updateWritingBlocDto})
    } catch (error) {
      throw new BadRequestException()
    }
  }

 async remove(id: string) {
    try {
      let find = await this.prisma.writing_Bloc.findUnique({where:{id}})
      if(!find){
        return new NotFoundException("No data")
      }
      return await this.prisma.writing_Bloc.delete({where:{id}})
    } catch (error) {
      throw new BadRequestException()
    }
  }
}
