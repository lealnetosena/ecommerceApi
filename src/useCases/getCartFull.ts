import { NotFoundException } from "@domain/exceptions/notFound";
import { PrismaClient, Cart } from "@prisma/client";

const prisma = new PrismaClient()

export class GetCartFullUseCase{
    constructor(){}

    async handle(idCart: number) : Promise<any>{

        const cart = await prisma.cart.findFirst({
            select:{
                id: true,
                totalValue: true,
                flagCartClose: true,
                dateClosedCart: true,
                user:{
                    select:{
                        name: true
                    }    
                },
                itemsCart:{
                    include:{
                        product:{
                            include:{
                                brand:{select:{nameBrand: true}},
                                category: {select:{nameCategory:true}}
                            }
                        }
                    }
                }
            },
            where: {
                id: {
                    equals: idCart
                }
            }         
               
            //     product:{
            //         select:{
            //             name: true,
            //         }
            //     },
			// 	brand: {
            //         select: {
            //             nameBrand: true
            //         }
            //     },
            //     category: {
            //         select: {
            //             nameCategory: true
            //         }
            //     }
            //     }
			// }
            // }
            
            // where: {
            //     id: {
            //         equals: productId
            //     }
            // }
        })

        if(!cart){
            throw new NotFoundException("Cart not created")
        }
        
        return cart
    }


}