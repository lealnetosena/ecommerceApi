import { PrismaClient, Purchases } from "@prisma/client";
import { GetCartUseCase } from "./getCart";
import { NotFoundException } from "@domain/exceptions/notFound";

const prisma = new PrismaClient()

export class CreatePurchaseUseCase{
    constructor(){}

    async handle(userId: number) : Promise<Purchases>{

        
			const ifexistCartUser = await this.ifExistCartUser(userId)
			//const productExist = await this.checkIfProductExist(itemsCart.productId);

			if (ifexistCartUser){
					throw new NotFoundException('Usuário já possui um carrinho')
			}

			const createdCart = await prisma.cart.create({
					data: {
							userId,
							totalValue: 0
					}
			})
			return createdCart
    }

		async ifExistCartUser(userId: number) : Promise<Boolean>{
			const cart = await prisma.cart.findFirst({
					where: {
							userId: {
									equals: userId
							}
						}
					})
			return !!cart
		}


}