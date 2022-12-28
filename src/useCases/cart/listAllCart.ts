import { Cart, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class ListCartUseCase{
    constructor(){}

    async handle() : Promise<Cart[]>{

        const carts = await prisma.cart.findMany({
            include: {
                itemsCart: {
                    select : { 
                        qty: true,
                        untValue: true,
                        product: {
                            select: {
                                name: true,
                                description: true,
                                brand: {select :{ nameBrand: true}},
                                category:{ select:{nameCategory: true}}
                            }
                        }
                    }
                }
            }
        })
        return carts
    }


}