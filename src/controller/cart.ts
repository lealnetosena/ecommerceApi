import { CartDto, ItemsCartDto } from "@domain/request/cart";
import { UserDto } from "@domain/request/user"
import { CreateCartUseCase } from "@useCases/createCart"; 
import { CreateItemsCartUseCase } from "@useCases/createItemsCart";
import { ListCartUseCase } from "@useCases/listCart"; 
import { Request, Response } from "express";
import { GetProductUseCase } from "@useCases/getProduct";

export async function create(req: Request, res: Response){
    const user = req.body
    const useCase = new CreateCartUseCase()
    const createdProduct = await useCase.handle(user.userId)
    return res.json(createdProduct)
}

export async function addProductCart(req: Request<{},{},Omit<ItemsCartDto,'id'>>, res: Response){
    const itemsCart = req.body

    // const getProduct = new GetProductUseCase()
    // const product = await getProduct.handle(itemsCart.productId)

    // if (!product){
    //     return res.json({
    //         message: 'Product not found'
    //     })
    // }

    const useCase = new CreateItemsCartUseCase()
    const cadastredItemsCart = await useCase.handle(itemsCart)

    return res.json(cadastredItemsCart)
}

export async function list(req: Request, res: Response){
    const useCase = new ListCartUseCase()
    const products = await useCase.handle()
    return res.json(products)
}
