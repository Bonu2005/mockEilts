import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReadingVariantDto } from './dto/create-reading_variant.dto';
import { UpdateReadingVariantDto } from './dto/update-reading_variant.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ReadingVariantService {
  constructor(private prisma:PrismaService){}
 async create(createReadingVariantDto: CreateReadingVariantDto) {
  try {
    return await this.prisma.reading_Variant.create({data:createReadingVariantDto})
  } catch (error) {
    throw new BadRequestException()
  }
  }

 async findAll() {
    try {
      return await this.prisma.reading_Variant.findMany()
    } catch (error) {
      throw new BadRequestException()
    }

  }

 async findOne(id: string) {
    try {
      let find = await this.prisma.reading_Variant.findUnique({where:{id}})
      if(!find){
        return {message:"No data"}
      }
      return find
    } catch (error) {
      throw new BadRequestException()
    }
  }

 async update(id: string, updateReadingVariantDto: UpdateReadingVariantDto) {
   try {
    let find = await this.prisma.reading_Variant.findUnique({where:{id}})
    if(!find){
      return {message:"No data"}
    }
    return await this.prisma.reading_Variant.update({where:{id},data:updateReadingVariantDto})
   } catch (error) {
    throw new BadRequestException()
   }
  }

 async remove(id: string) {
   try {
    let find = await this.prisma.reading_Variant.findUnique({where:{id}})
    if(!find){
      return {message:"No data"}
    }
    return await this.prisma.reading_Variant.delete({where:{id}})
   } catch (error) {
    throw new BadRequestException()
   }
  }
}
