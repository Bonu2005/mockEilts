import { reading_bloc_type } from "@prisma/client"

export class CreateReadingBlocQueDto {
    description:string
    type:reading_bloc_type
    reading_blocId :string
}
