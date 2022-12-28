import { NotFoundException } from "@domain/exceptions/notFound";
import { PrismaClient,  Brands } from "@prisma/client";

const prisma = new PrismaClient()

export class GetBrandUseCase{
    constructor(){}

    async handle(brandId: number) : Promise<Brands>{

        const brand = await prisma.brands.findFirst({
            where: {
                id: {
                    equals: brandId
                }
            }
        })

        if(!brand){
            throw new NotFoundException("Brand not Found")
        }
        
        return brand
    }


}