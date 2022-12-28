import { Brands, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class CreateBrandUseCase{
    constructor(){}

    async handle(brandName: string ) : Promise<Brands>{

        const createdBrand = await prisma.brands.create({
            data: {
                nameBrand: brandName
            }
        })
        return createdBrand
    }


}