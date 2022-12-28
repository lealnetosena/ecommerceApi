import { UserDto } from "@domain/request/user";
import { CreateUserUseCase, ListUserUseCase, GetUserUseCase } from "@useCases/user"; 
import { Request, Response } from "express";

export async function create(req: Request<{},{}, Omit<UserDto, 'id'>>, res: Response){
    const user = req.body
    const useCase = new CreateUserUseCase()
    const createdBrand = await useCase.handle(user)
    return res.json(createdBrand)
}


export async function list(req: Request, res: Response){
    const useCase = new ListUserUseCase()
    const brands = await useCase.handle()
    return res.json(brands)
}

export async function get(req: Request, res: Response){
    const userId = req.body
    const useCase = new GetUserUseCase()
    const brands = await useCase.handle(userId)
    return res.json(brands)
}