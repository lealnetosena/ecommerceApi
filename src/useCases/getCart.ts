import { PrismaClient, Cart } from "@prisma/client";

const prisma = new PrismaClient()

export class GetCartUseCase{
    constructor(){}

    async handle(productId: number) : Promise<Cart | null>{

        const cart = await prisma.cart.findFirst({
            where: {
                id: {
                    equals: productId
                }
            }
        })
        return cart
    }


}