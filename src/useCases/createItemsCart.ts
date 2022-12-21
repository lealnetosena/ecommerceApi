import { NotFoundException } from "@domain/exceptions/notFound";
import { ItemsCartDto } from "@domain/request/cart";
import { ItemsCart, Products, PrismaClient } from "@prisma/client";
import { GetProductUseCase } from "./getProduct";

const prisma = new PrismaClient()
const getProduct = new GetProductUseCase()

export class CreateItemsCartUseCase{
    constructor(){}

    async handle(itemsCart: Omit<ItemsCartDto, 'id' | 'untValue'>) : Promise<ItemsCart>{

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

    // async checkIfProductExist(id: number): Promise<Boolean> {
    //     const product = await prisma.products.findFirst({
    //         where: {
    //             id: {
    //                 equals: id
    //             }
    //         }
    //     })
        
    //     return !!product
    // }
    // async checkIfProductExist(id: string): Promise<boolean> {
    //     const user = await prisma.user.findFirst({
    //       where: {
    //         id: {
    //           equals: id,
    //         },
    //       },
    //     });
    
    //     // !!user
    //     return user !== null;
    //   }

}