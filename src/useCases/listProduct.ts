import { Products, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class ListProductUseCase{
    constructor(){}

    async handle(){

        const products = await prisma.products.findMany({
            select:{
                name: true,
                description: true,
                priceUnit: true,
                flagActive: true,      
			// include: {
				brand: {
                    select: {
                        nameBrand: true
                    }
                },
                category: {
                    select: {
                        nameCategory: true
                    }
                }
			// }
            }
		})
        return products
    }


}