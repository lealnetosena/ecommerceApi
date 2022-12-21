import { Products, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class GetProductUseCase{
    constructor(){}

    async handle(productId: number) : Promise<Products | null>{

        const product = await prisma.products.findFirst({
            where: {
                id: productId
            }
        })
        return product
    }


}