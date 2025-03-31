import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GroupService {
  constructor(private prisma:PrismaService){}
  async create(createGroupDto: CreateGroupDto) {
    try {
      return await this.prisma.group.create({
        data: {
          ...createGroupDto,
          startTime: new Date(createGroupDto.startTime),
          endTime: new Date(createGroupDto.endTime),
        },
      });
    } catch (error) {
      console.error(error);
      throw new BadRequestException();
    }
  }
 async findAll() {
    try {
      return await this.prisma.group.findMany()
    } catch (error) {
      throw new BadRequestException()
    }
  }

 async findOne(id: string) {
    try {
      let find = await this.prisma.group.findUnique({where:{id}})
      if(!find){
        return {message:"No data"}
      }
     return find
    } catch (error) {
     throw new BadRequestException()
    }
  }

 async update(id: string, updateGroupDto: UpdateGroupDto) {
    try {
      let find = await this.prisma.group.findUnique({where:{id}})
      if(!find){
        return {message:"No data"}
      }
      return await this.prisma.region.update({where:{id},data:updateGroupDto})
      
    } catch (error) {
      throw new BadRequestException()
    }
  }

 async remove(id: string) {
    try {
      let find = await this.prisma.group.findUnique({where:{id}})
      if(!find){
        return {message:"No data"}
      }
      return await this.prisma.group.delete({where:{id}})
    } catch (error) {
      throw new BadRequestException()
    }
  }
}
