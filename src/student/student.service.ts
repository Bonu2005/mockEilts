import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateStudentDto, LoginStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { MailService } from 'src/mail/mail.service';
import { totp } from 'otplib';
import * as bcrypt from "bcrypt"
@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService, private jwt: JwtService, private config: ConfigService,private mail:MailService) {}
      async sendOtp(email: string) {
        try {
          let genOtp = totp.generate(`${email}address`)
          await this.mail.sendMaile(email, "Verify your email", genOtp)
          return { message: "verify your accaunt" }
        } catch (error) {
          return { error }
        }
    
      }
    
      async verify(email: string, otp: string) {
        try {
          let veri = totp.check(otp, `${email}address`)
          if (!veri) {
            return { message: "Wrong otp" }
          }
          return { message: "Your email verifiyed ✅" }
        } catch (error) {
          return { error }
        }
    
      }
      async register(createStudentDto: CreateStudentDto) {
        try {
          let { password } = createStudentDto;
          let hash = bcrypt.hashSync(password, 10);
          let created = await this.prisma.student.create({ data: { ...createStudentDto, password: hash } });
          return created;
        } catch (error) {
          console.error('Register error:', error);
          throw new InternalServerErrorException('Failed to register center');
        }
      }
    
      async login(loginStudentDto: LoginStudentDto) {
        try {
          let { phone, password } = loginStudentDto;
    
          let find = await this.prisma.student.findFirst({ where: { phone } });
          if (!find) {
            throw new NotFoundException('Teacher not found');
          }
    
          let match = bcrypt.compareSync(password, find.password);
          if (!match) {
            throw new UnauthorizedException('Wrong credentials');
          }
    
          return {
            accessToken: this.generateAccessToken({ id: find.id, role:find.role }),
            refreshToken: this.generateRefreshToken({ id: find.id, role:find.role }),
          };
        } catch (error) {
          if (error instanceof NotFoundException || error instanceof UnauthorizedException) {
            throw error;
          }
          console.error('Login error:', error);
          throw new InternalServerErrorException('Something went wrong, please try again later');
        }
      }
    
      generateAccessToken(payload: any) {
        const secret = this.config.get<string>('accessToken_KEY');
        if (!secret) throw new InternalServerErrorException('Missing access token secret');
        return this.jwt.sign(payload, { secret, expiresIn: '15m' });
      }
    
      generateRefreshToken(payload: any) {
        const secret = this.config.get<string>('refreshToken_KEY');
        if (!secret) throw new InternalServerErrorException('Missing refresh token secret');
        return this.jwt.sign(payload, { secret, expiresIn: '7d' });
      }
    
      async refreshToken(req: Request) {
        let [id, centerRole] = req['center'];
        return {
          accessToken: this.generateAccessToken({ id, centerRole }),
          refreshToken: this.generateRefreshToken({ id, centerRole }),
        };
      }
    
      async findOne(id: string) {
        try {
          let find = await this.prisma.student.findUnique({ where: { id } });
          if (!find) {
            throw new NotFoundException('Center not found');
          }
          return find;
        } catch (error) {
          if (error instanceof NotFoundException) {
            throw error;
          }
          console.error('FindOne error:', error);
          throw new InternalServerErrorException('Something went wrong');
        }
      }
    
      async update(id: string, updateStudentDto: UpdateStudentDto) {
        try {
          let find = await this.prisma.student.findUnique({ where: { id } });
          if (!find) {
            throw new NotFoundException('Center not found');
          }
          let updated = await this.prisma.student.update({ where: { id }, data: updateStudentDto });
          return updated;
        } catch (error) {
          if (error instanceof NotFoundException) {
            throw error;
          }
          console.error('Update error:', error);
          throw new InternalServerErrorException('Failed to update center');
        }
      }
    
      async remove(id: string) {
        try {
          let find = await this.prisma.student.findUnique({ where: { id } });
          if (!find) {
            throw new NotFoundException('Center not found');
          }
          let removed = await this.prisma.student.delete({ where: { id } });
          return removed;
        } catch (error) {
          if (error instanceof NotFoundException) {
            throw error;
          }
          console.error('Remove error:', error);
          throw new InternalServerErrorException('Failed to remove center');
        }
      }
}
