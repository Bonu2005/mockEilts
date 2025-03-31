export class CreateStudentDto {
    fullName :string
    phone    :string
    password :string
    studentRole:string
    groupId  :string
}

export class LoginStudentDto{
    phone    :string
    password :string
}