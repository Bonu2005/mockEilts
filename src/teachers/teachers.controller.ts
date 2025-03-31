import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto, LoginTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}
  @Post('sendOtp')
  sendOtp(@Body('email') email: string) {
    return this.teachersService.sendOtp(email);
  }

  @Post("verify")
  verify(@Body('email') email: string,@Body('otp') otp: string,) {
    return this.teachersService.verify(email,otp);
  }
  @Post('register')
  register(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teachersService.register(createTeacherDto);
  }

  @Post('login')
  login(@Body() loginTeacherDto:LoginTeacherDto) {
    return this.teachersService.login(loginTeacherDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teachersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teachersService.update(id, updateTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teachersService.remove(id);
  }


}
