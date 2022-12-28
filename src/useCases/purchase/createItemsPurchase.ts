import { NotFoundException } from "@domain/exceptions/notFound";
import { ItemsCartDto } from "@domain/request/cart";
import {  ItemsPurchases, ItemsCart, Products, PrismaClient, Purchases } from "@prisma/client";
import { GetProductUseCase } from "../product/getProduct";

const prisma = new PrismaClient()


export class CreateItemsPurchaseUseCase{
    constructor(){}

    async handle({ cartId, id  }: Purchases) : Promise<any>{

        const itemsCart = await prisma.itemsCart.findMany({
            where: {
                cartId: cartId
            }
        })

        for (const key in itemsCart) {
            if (Object.prototype.hasOwnProperty.call(itemsCart, key)) {
                const productId = itemsCart[key].productId;
                const qty = itemsCart[key].qty;
                const untValue = itemsCart[key].untValue;
                
                await prisma.itemsPurchases.create({
                    data:{
                        qty: qty,
                        untValue: untValue,
                        productId: productId,
                        purchasesId: id

                    }
                })
            }
        }

        return 
    }
}