import { PrismaClient, Cart } from "@prisma/client";

const prisma = new PrismaClient()

export class CreateCartUseCase{
    constructor(){}

    async handle(userId: number) : Promise<Cart>{

        const createdCart = await prisma.cart.create({
            data: {
                userId,
                totalValue: 0
            }
        })
        return createdCart
    }


}