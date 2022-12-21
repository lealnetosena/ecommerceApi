import { CartDto, ItemsCartDto } from "@domain/request/cart";
import { UserDto } from "@domain/request/user"
import { CreateCartUseCase } from "@useCases/createCart"; 
import { CreateItemsCartUseCase } from "@useCases/createItemsCart";
import { ListCartUseCase } from "@useCases/listAllCart"; 
import { Request, Response } from "express";
import { GetProductUseCase } from "@useCases/getProduct";
import { PrismaClient } from "@prisma/client";
import { NotFoundException } from "@domain/exceptions/notFound";
import { isNull } from "util";
import { SumCartUseCase } from "@useCases/sumCart";
import { UpdateValueCartUseCase } from "@useCases/updateValueCart";

const prisma = new PrismaClient()

export async function create(req: Request, res: Response){
    const user = req.body
    const useCase = new CreateCartUseCase()
    const createdProduct = await useCase.handle(user.userId)
    return res.json(createdProduct)
}

export async function addProductCart(req: Request<{},{},Omit<ItemsCartDto,'id' | 'untValue'>>, res: Response){
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

    const useCaseSum = new SumCartUseCase
    const totalValue = await useCaseSum.handle(itemsCart.cartId)

    const useCaseUpdateTotalValue = new UpdateValueCartUseCase()
    const updatedTotalValueCart = await useCaseUpdateTotalValue.handle(totalValue, itemsCart.cartId ) 

    return res.json(cadastredItemsCart)
}

export async function list(req: Request, res: Response){
    const useCase = new ListCartUseCase()
    const products = await useCase.handle()
    return res.json(products)
}

// export async function sumCart(req: Request, res: Response){
//     const itemsCart = req.body

//     const useCase = new SumCartUseCase()
//     const cadastredItemsCart = await useCase.handle()

//     return res.json(cadastredItemsCart)
// }
