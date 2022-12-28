import { NotFoundException } from "@domain/exceptions/notFound";
import { PrismaClient, Category } from "@prisma/client";

const prisma = new PrismaClient()

export class GetCategoryUseCase{
    constructor(){}

    async handle(categoryId: number) : Promise<Category>{

        const category = await prisma.category.findFirst({
            where: {
                id: {
                    equals: categoryId
                }
            }
        })

        if(!category){
            throw new NotFoundException("Category not found")
        }
        
        return category
    }


}