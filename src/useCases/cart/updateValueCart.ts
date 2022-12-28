import { PrismaClient, Cart } from "@prisma/client";

const prisma = new PrismaClient()

export class UpdateValueCartUseCase{
    constructor(){}

    async handle(totalValue: number, cartId : number) : Promise<Cart>{

        const cart = await prisma.cart.update({
            data:{
                totalValue: totalValue
            },
            where: {
                id: cartId
            }
        })
        return cart
    }


}