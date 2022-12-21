import { User, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class GetUserUseCase{
    constructor(){}

    async handle(userId: string) : Promise<User | null>{

        const user = await prisma.user.findFirst({
            where: {
                id: Number(userId)
            }
        })
        return user
    }


}