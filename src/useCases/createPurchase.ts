import { Cart, PrismaClient, Purchases } from "@prisma/client";
import { GetCartUseCase } from "./getCart";
import { NotFoundException } from "@domain/exceptions/notFound";

const prisma = new PrismaClient()

export class CreatePurchaseUseCase{
    constructor(){}

    async handle({userId, id, totalValue}: Cart) : Promise<Purchases>{

			const createdCart = await prisma.purchases.create({
					data: {
							userId: userId,
							cartId: id,
							totalValue: totalValue
					}
			})
			return createdCart
    }

}