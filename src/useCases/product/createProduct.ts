import { ProductDto } from "@domain/request/product";
import { Products, PrismaClient } from "@prisma/client";
import { GetBrandUseCase } from "./getBrand";
import { GetCartUseCase } from "../cart/getCart";
import { GetCategoryUseCase } from "./getCategory";

const prisma = new PrismaClient()

export class CreateProductUseCase{
    constructor(){}

    async handle(product: Omit<ProductDto, 'id' | 'itemsCart'>) : Promise<Products>{

        const useCaseGetBrand = new GetBrandUseCase()
        await useCaseGetBrand.handle(product.brandId)
        
        const useCaseGetCategory = new GetCategoryUseCase()
        await useCaseGetCategory.handle(product.categoryId)
        


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