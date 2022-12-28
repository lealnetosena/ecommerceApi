import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class CreateCategoryUseCase{
    constructor(){}

    async handle(categoryName: string ) : Promise<Category>{

        const createdCategory = await prisma.category.create({
            data: {
                nameCategory: categoryName
            }
        })
        return createdCategory
    }


}