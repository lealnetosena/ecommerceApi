import { NotFoundException } from "@domain/exceptions/notFound";
import { PrismaClient, Cart } from "@prisma/client";

const prisma = new PrismaClient()

export class GetCartUseCase{
    constructor(){}

    async handle(productId: number) : Promise<Cart>{

        const cart = await prisma.cart.findFirst({
            where: {
                id: {
                    equals: productId
                }
            }
        })

        if(!cart){
            throw new NotFoundException("Cart not created")
        }
        
        return cart
    }


}