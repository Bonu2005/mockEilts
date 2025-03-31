import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateWritingTaskDto } from './dto/create-writing_task.dto';
import { UpdateWritingTaskDto } from './dto/update-writing_task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WritingTaskService {
   constructor(private prisma:PrismaService){}
   async create(createWritingTaskDto: CreateWritingTaskDto) {
      try {
        return await  this.prisma.writing_Task.create({data:createWritingTaskDto})
      } catch (error) {
        throw new BadRequestException()
      }
    }
  
   async findAll() {
    try {
      return await this.prisma.writing_Task.findMany()
    } catch (error) {
      throw new BadRequestException()
    }
    }
  
   async findOne(id: string) {
     try {
      let find = await this.prisma.writing_Task.findUnique({where:{id}})
      if(!find){
        throw new NotFoundException("Not found")
      }
      return find
     } catch (error) {
      throw new BadRequestException()
     }
    }
  
   async update(id: string, updateWritingTaskiantDto: UpdateWritingTaskDto) {
      try {
        let find = await this.prisma.writing_Task.findUnique({where:{id}})
        if(!find){
          throw new NotFoundException("Not found")
        }
  
        return await this.prisma.writing_Task.update({where:{id},data:updateWritingTaskiantDto})
       } catch (error) {
        throw new BadRequestException()
       }
    }
  
   async remove(id: string) {
      try {
        let find = await this.prisma.writing_Task.findUnique({where:{id}})
        if(!find){
          throw new NotFoundException("Not found")
        }
  
        return await this.prisma.writing_Task.delete({where:{id}})
       } catch (error) {
        throw new BadRequestException()
       }
    }
}
