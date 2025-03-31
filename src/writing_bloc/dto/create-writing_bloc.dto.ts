import { writing_bloc_name } from "@prisma/client"

export class CreateWritingBlocDto {
    writingVarId:string
    taskName:writing_bloc_name
}

