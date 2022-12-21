import { BrandDto } from "@domain/request/brand";
import { CreateBrandUseCase } from "@useCases/createBrand"; 
import { ListBrandUseCase } from "@useCases/listAllBrand";
import { Request, Response } from "express";

export async function create(req: Request<{},{}, Omit<BrandDto, 'id'>>, res: Response){
    const { name } = req.body
    const useCase = new CreateBrandUseCase()
    const createdBrand = await useCase.handle(name)
    return res.json(createdBrand)
}

export async function list(req: Request, res: Response){
    const useCase = new ListBrandUseCase()
    const brands = await useCase.handle()
    return res.json(brands)
}