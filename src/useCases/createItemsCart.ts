import { NotFoundException } from "@domain/exceptions/notFound";
import { ItemsCartDto } from "@domain/request/cart";
import { ItemsCart, Products, PrismaClient } from "@prisma/client";
import { GetProductUseCase } from "./getProduct";

const prisma = new PrismaClient()
const getProduct = new GetProductUseCase()

export class CreateItemsCartUseCase{
    constructor(){}

    async handle(itemsCart: Omit<ItemsCartDto, 'id'>) : Promise<ItemsCart | null>{

        const product = await getProduct.handle(itemsCart.productId)

        if (!product){
            throw new NotFoundException('Product not found')
        }
        const createdItemsCart = await prisma.itemsCart.create({
            data: {
                productId: itemsCart.productId,
                cartId: itemsCart.cartId,
                qty: itemsCart.qty,             
                untValue: product?.priceUnit                  
            }
        })
        return createdItemsCart
    }


}