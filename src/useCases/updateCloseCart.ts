import { PrismaClient, Cart } from "@prisma/client";

const prisma = new PrismaClient()

export class UpdateCloseCartUseCase{
    constructor(){}

    async handle(cartId : number) : Promise<undefined>{

        await prisma.cart.update({
            data:{
                flagCartClose: true
            },
            where: {
                id: cartId
            }
        })
        const now  = new Date()
        await prisma.cart.update({
            data:{
                dateClosedCart: now
            },
            where: {
                id: cartId
            }
        })
        return
    }


}