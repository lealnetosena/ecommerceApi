import { CartDto, ItemsCartDto } from "@domain/request/cart";
import { UserDto } from "@domain/request/user"
import { CreateCartUseCase } from "@useCases/createCart"; 
import { CreateItemsCartUseCase } from "@useCases/createItemsCart"; 
import { Request, Response } from "express";

export async function create(req: Request<{},{}, UserDto>, res: Response){
    const user  = req.body
    const useCase = new CreateCartUseCase()
    const createdProduct = await useCase.handle(user.id)
    return res.json(createdProduct)
}

export async function addProductCart(req: Request<{},{},Omit<ItemsCartDto,'id'>>, res: Response){
    const itemsCart = req.body
    const useCase = new CreateItemsCartUseCase()
    const cadastredItemsCart = await useCase.handle(itemsCart)
    return res.json(cadastredItemsCart)
}

// export async function list(req: Request, res: Response){
//     const useCase = new ListProductUseCase()
//     const products = await useCase.handle()
//     return res.json(products)
// }
