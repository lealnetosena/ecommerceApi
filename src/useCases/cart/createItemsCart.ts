import { NotFoundException } from "@domain/exceptions/notFound";
import { ItemsCartDto } from "@domain/request/cart";
import { ItemsCart, PrismaClient } from "@prisma/client";
import { GetProductUseCase } from "../product/getProduct";

const prisma = new PrismaClient()
const getProduct = new GetProductUseCase()

export class CreateItemsCartUseCase{
    constructor(){}

    async handle(itemsCart: Omit<ItemsCartDto, 'id' | 'untValue'>) : Promise<ItemsCart>{

        const ifexistCartUser = await this.ifExistCartOpen(itemsCart.cartId)

        if (!ifexistCartUser){
            throw new NotFoundException('Carrinho já fechado')
        }
        
        
        const product = await getProduct.handle(itemsCart.productId)
        //const productExist = await this.checkIfProductExist(itemsCart.productId);

        if (!product){
            throw new NotFoundException('Product not found')
        }
        
        const createdItemsCart = await prisma.itemsCart.create({
            data: {
                productId: itemsCart.productId,
                cartId: itemsCart.cartId,
                qty: itemsCart.qty,             
                untValue: product.priceUnit  
            }
        })
        return createdItemsCart

    }

    async ifExistCartOpen(cartId: number) : Promise<Boolean>{
        const cart = await prisma.cart.findFirst({
                where: {
                        id: {
                                equals: cartId
                        }, AND:{
                            flagCartClose: {
                                equals: false
                            }
                        }
                    }
                })
        return !!cart
    }


}