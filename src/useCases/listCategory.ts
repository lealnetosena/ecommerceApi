import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class ListCategoryUseCase{
    constructor(){}

    async handle() : Promise<Category[]>{

        const categories = await prisma.category.findMany()
        return categories
    }


}