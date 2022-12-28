import { PrismaClient, Cart } from "@prisma/client";

const prisma = new PrismaClient()

export class UpdateCloseCartUseCase{
    constructor(){}

    async handle(cartId : number) : Promise<Cart>{

        const cart = await prisma.cart.update({
            data:{
                flagCartClose: true
            },
            where: {
                id: cartId
            }
        })
        return cart
    }


}