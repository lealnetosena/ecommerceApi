import { ProductDto } from "@domain/request/product";
import { Products, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class CreateProductUseCase{
    constructor(){}

    async handle(product: Omit<ProductDto, 'id' | 'itemsCart'>) : Promise<Products>{

        const createdProduct = await prisma.products.create({
            data: {
                name: product.name,
                description: product.description,
                brandId: product.brandId,
                categoryId: product.categoryId,
                flagActive: product.flagActive,
                priceUnit: product.priceUnit             
            }
        })
        return createdProduct
    }


}