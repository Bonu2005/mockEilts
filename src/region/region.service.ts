import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RegionService {
  constructor(private prisma:PrismaService){}
 async create(createRegionDto: CreateRegionDto) {
  try {
    return await this.prisma.region.create({data:createRegionDto})
  } catch (error) {
    throw new BadRequestException()
  }
    
  }
 async findAll() {
  try {
    return await this.prisma.region.findMany()
  } catch (error) {
    throw new BadRequestException()
  }

  }

 async findOne(id: string) {
  try {
    let find = await this.prisma.region.findUnique({where:{id}})
    if(!find){
      return {message:"No data"}
    }
   return find
  } catch (error) {
   throw new BadRequestException()
  }
 
  }

 async update(id: string, updateRegionDto: UpdateRegionDto) {
  try {
    let find = await this.prisma.region.findUnique({where:{id}})
    if(!find){
      return {message:"No data"}
    }
    return await this.prisma.region.update({where:{id},data:updateRegionDto})
    
  } catch (error) {
    throw new BadRequestException()
  }
  }

 async remove(id: string) {
  try {
    let find = await this.prisma.region.findUnique({where:{id}})
    if(!find){
      return {message:"No data"}
    }
    return await this.prisma.region.delete({where:{id}})
  } catch (error) {
    throw new BadRequestException()
  }
  }
}
