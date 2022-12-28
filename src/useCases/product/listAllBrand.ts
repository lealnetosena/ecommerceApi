import { Brands, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class ListBrandUseCase{
    constructor(){}

    async handle() : Promise<Brands[]>{

        const brands = await prisma.brands.findMany()
        return brands
    }


}