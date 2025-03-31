import { reading_bloc_name } from "@prisma/client"
export class CreateReadingBlocDto {
    blocName:reading_bloc_name
    text:string
    reading_variantId:string
}
