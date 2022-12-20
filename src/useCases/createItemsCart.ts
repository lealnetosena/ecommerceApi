import { ItemsCartDto } from "@domain/request/cart";
import { ItemsCart, Products, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class CreateItemsCartUseCase{
    constructor(){}

    async handle(itemsCart: Omit<ItemsCartDto, 'id'>) : Promise<ItemsCart>{

        const createdItemsCart = await prisma.itemsCart.create({
            data: {
                productId: itemsCart.productId,
                cartId: itemsCart.cartId,
                untValue: itemsCart.untValue,
                qty: itemsCart.qty             
            }
        })
        return createdItemsCart
    }


}