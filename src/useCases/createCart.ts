import { PrismaClient, Cart } from "@prisma/client";
import { GetCartUseCase } from "./getCart";
import { NotFoundException } from "@domain/exceptions/notFound";

const prisma = new PrismaClient()

export class CreateCartUseCase{
    constructor(){}

    async handle(userId: number) : Promise<Cart>{

        
			const ifexistCartUser = await this.ifExistCartUser(userId)
			//const productExist = await this.checkIfProductExist(itemsCart.productId);

			if (ifexistCartUser){
					throw new NotFoundException('Usuário já possui um carrinho')
			}

			const createdCart = await prisma.cart.create({
					data: {
							userId,
							totalValue: 0,
							flagCartClose: false
					}
			})
			return createdCart
    }

		async ifExistCartUser(userId: number) : Promise<Boolean>{
			const cart = await prisma.cart.findFirst({
					where: {
							userId: {
									equals: userId
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