import { User, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class ListUserUseCase{
    constructor(){}

    async handle() : Promise<User[]>{

        const users = await prisma.user.findMany()
        return users
    }


}