import { CategoryDto } from "@domain/request/category";
import { CreateCategoryUseCase } from "@useCases/createCategory"; 
import { ListCategoryUseCase } from "@useCases/listAllCategory";
import { Request, Response } from "express";

export async function create(req: Request<{},{}, Omit<CategoryDto, 'id'>>, res: Response){
    const { name } = req.body
    const useCase = new CreateCategoryUseCase()
    const createdCategory = await useCase.handle(name)
    return res.json(createdCategory)
}

export async function list(req: Request, res: Response){
    const useCase = new ListCategoryUseCase()
    const categories = await useCase.handle()
    return res.json(categories)
}