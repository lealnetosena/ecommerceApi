import { UserDto } from "@domain/request/user";
import { User, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class CreateUserUseCase{
    constructor(){}

    async handle({name, email, password}: Omit<UserDto, 'id'>) : Promise<User>{

        const createdUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        })
        return createdUser
    }


}