import { Products, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class CreateProductUseCase{
    constructor(){}

    async handle(categoryName: string ) : Promise<Products>{

        const createdProduct = await prisma.products.create({
            data: {
                name
            }
        })
        return createdProduct
    }


}