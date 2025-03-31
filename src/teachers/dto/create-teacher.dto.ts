import { teacherStatus } from "@prisma/client"

export class CreateTeacherDto {
    name        :string
    email       :string
    password    :string
    phone       :string
    sertificate :string
    status      :teacherStatus
    image       :string
    centerId    :string
}

export class LoginTeacherDto{
    email:string
    password:string
}