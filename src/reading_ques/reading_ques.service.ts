import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReadingQueDto } from './dto/create-reading_que.dto';
import { UpdateReadingQueDto } from './dto/update-reading_que.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReadingQuesService {
  constructor(private prisma:PrismaService){}
 async create(createReadingQueDto: CreateReadingQueDto) {
    try {
    return  await  this.prisma.reading_Quest.create({data:createReadingQueDto})
    } catch (error) {
      throw new BadRequestException()
    }
  }
 async findAll() {
   try {
    return  await this.prisma.reading_Quest.findMany()
   } catch (error) {
    throw new BadRequestException()
   }
  }

 async findOne(id: string) {
   try {
    let find = await this.prisma.reading_Quest.findUnique({where:{id}})
    if(!find){
      return {message:"No data"}
    }
    return find
   } catch (error) {
    throw new BadRequestException()
   }
  }

 async update(id: string, updateReadingQueDto: UpdateReadingQueDto) {
    try {
      let find = await this.prisma.reading_Quest.findUnique({where:{id}})
      if(!find){
        return {message:"No data"}
      }
      return await this.prisma.reading_Quest.update({where:{id},data:updateReadingQueDto})
    } catch (error) {
      throw new BadRequestException()
    }
  }
 async remove(id: string) {
   try {
    let find = await this.prisma.reading_Quest.findUnique({where:{id}})
    if(!find){
      return {message:"No data"}
    }
    return await this.prisma.reading_Quest.delete({where:{id}})
   } catch (error) {
    throw new BadRequestException()
   }
  }
}
