import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateWritingVariantDto } from './dto/create-writing_variant.dto';
import { UpdateWritingVariantDto } from './dto/update-writing_variant.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WritingVariantService {
  constructor(private prisma:PrismaService){}
 async create(createWritingVariantDto: CreateWritingVariantDto) {
    try {
      return await  this.prisma.writing_Var.create({data:createWritingVariantDto})
    } catch (error) {
      throw new BadRequestException()
    }
  }

 async findAll() {
  try {
    return await this.prisma.writing_Var.findMany()
  } catch (error) {
    throw new BadRequestException()
  }
  }

 async findOne(id: string) {
   try {
    let find = await this.prisma.writing_Var.findUnique({where:{id}})
    if(!find){
      throw new NotFoundException("Not found")
    }
    return find
   } catch (error) {
    throw new BadRequestException()
   }
  }

 async update(id: string, updateWritingVariantDto: UpdateWritingVariantDto) {
    try {
      let find = await this.prisma.writing_Var.findUnique({where:{id}})
      if(!find){
        throw new NotFoundException("Not found")
      }

      return await this.prisma.writing_Var.update({where:{id},data:updateWritingVariantDto})
     } catch (error) {
      throw new BadRequestException()
     }
  }

 async remove(id: string) {
    try {
      let find = await this.prisma.writing_Var.findUnique({where:{id}})
      if(!find){
        throw new NotFoundException("Not found")
      }

      return await this.prisma.writing_Var.delete({where:{id}})
     } catch (error) {
      throw new BadRequestException()
     }
  }
}
