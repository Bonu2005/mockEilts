import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReadingBlocQueDto } from './dto/create-reading_bloc_que.dto';
import { UpdateReadingBlocQueDto } from './dto/update-reading_bloc_que.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReadingBlocQuesService {
  constructor(private prisma:PrismaService){}
  async create(createReadingBlocQueDto: CreateReadingBlocQueDto) {
    try {
      return await this.prisma.reading_Bloc_Qeus.create({data:createReadingBlocQueDto})
      
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async findAll() {
    try {
      return await this.prisma.reading_Bloc_Qeus.findMany()
    } catch (error) {
      throw new BadRequestException()
    }
  }

 async findOne(id: string) {
    try {
      let find = await this.prisma.reading_Bloc_Qeus.findUnique({where:{id}})
      if(!find){
        return {message:"No data"}
      }
      return find
      
    } catch (error) {
      
    }
  }

  async update(id: string, updateReadingBlocQueDto: UpdateReadingBlocQueDto) {
    try {
      let find = await this.prisma.reading_Bloc_Qeus.findUnique({where:{id}})
      if(!find){
        return {message:"No data"}
      }
      return await this.prisma.reading_Bloc_Qeus.update({where:{id},data:updateReadingBlocQueDto})
      
    } catch (error) {
       throw new BadRequestException()
    }
  }

 async remove(id: string) {
    try {
      let find = await this.prisma.reading_Bloc_Qeus.findUnique({where:{id}})
      if(!find){
        return {message:"No data"}
      }
      return await this.prisma.reading_Bloc_Qeus.delete({where:{id}})
    } catch (error) {
      throw new BadRequestException()
    }
  }
}
