import { ProductDto } from "@domain/request/product";
import { Products, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class UpdateProductUseCase{
    constructor(){}

    async handle(product: Omit<ProductDto,'itemsCart'>) : Promise<Products>{

        const createdProduct = await prisma.products.update({
            data: {
                name: product.name,
                description: product.description,
                brandId: product.brandId,
                categoryId: product.categoryId,
                flagActive: product.flagActive,
                priceUnit: product.priceUnit             
            },
            where:{
                id: product.id
            }
        })
        return createdProduct
    }


}