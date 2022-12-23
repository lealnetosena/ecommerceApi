import { Cart, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class ListCartUseCase{
    constructor(){}

    async handle() : Promise<any>{
    //async handle() : Promise<Cart[]>{

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
        //return carts[5].dateClosedCart?.toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"}) //toLocaleDateString('en-US', {timeZone: "America/Sao_Paulo"} )
    }


}