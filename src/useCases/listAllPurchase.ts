import { PrismaClient, Purchases } from "@prisma/client";

const prisma = new PrismaClient()

export class ListPurchaseUseCase{
    constructor(){}

    async handle() : Promise<Purchases[]>{

        const purchases = await prisma.purchases.findMany({
            include:{
                itemsPurchases: {
                    include: {
                        product: true
                    }
                }
            }
        })
        return purchases
    }


}