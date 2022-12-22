import { CartDto, ItemsCartDto } from "@domain/request/cart";
import { UserDto } from "@domain/request/user"
import { CreateCartUseCase } from "@useCases/createCart"; 
import { CreateItemsCartUseCase } from "@useCases/createItemsCart";
import { ListCartUseCase } from "@useCases/listAllCart"; 
import { Request, Response } from "express";
import { GetProductUseCase } from "@useCases/getProductObj";
import { PrismaClient } from "@prisma/client";
import { NotFoundException } from "@domain/exceptions/notFound";
import { isNull } from "util";
import { SumCartUseCase } from "@useCases/sumCart";
import { UpdateValueCartUseCase } from "@useCases/updateValueCart";
import { CreatePurchaseUseCase } from "@useCases/createPurchase";
import { GetCartUseCase } from "@useCases/getCartObj"; 
import { CreateItemsPurchaseUseCase } from "@useCases/createItemsPurchase";
import { UpdateCloseCartUseCase } from "@useCases/updateCloseCart";
import { GetCartFullUseCase } from "@useCases/getCartFull";
const prisma = new PrismaClient()

export async function create(req: Request, res: Response){
    const user = req.body
    const useCase = new CreateCartUseCase()
    const createdProduct = await useCase.handle(user.userId)
    return res.json(createdProduct)
}

export async function addProductCart(req: Request<{},{},Omit<ItemsCartDto,'id' | 'untValue'>>, res: Response){
    const itemsCart = req.body


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
    const cart = await useCase.handle()
    return res.json(cart)
}

// export async function sumCart(req: Request, res: Response){
//     const itemsCart = req.body

//     const useCase = new SumCartUseCase()
//     const cadastredItemsCart = await useCase.handle()

//     return res.json(cadastredItemsCart)
// }
interface CloseCartParam{
    idCart: string
}
export async function closeCart(req: Request<CloseCartParam>, res: Response){
    const { idCart } = req.params 
    
    
    const useCasegetCart = new GetCartUseCase()
    const cart = await useCasegetCart.handle(Number(idCart)) 
    
    if(cart.flagCartClose){
        throw new NotFoundException("Cart has closed")
    }

    const useCasePurchase = new CreatePurchaseUseCase()
    const createdPurchase = await useCasePurchase.handle(cart)
    
    const useCaseItemsPurchase = new CreateItemsPurchaseUseCase()
    await useCaseItemsPurchase.handle(createdPurchase)

    const useCaseCloseCart = new UpdateCloseCartUseCase()
    await useCaseCloseCart.handle(Number(idCart))

    const useCase = new GetCartFullUseCase()
    const cartClosed = await useCase.handle(Number(idCart))


    return res.json(cartClosed)



}


interface GetParams{
    idCart: string
}
export async function getCartbyId(req: Request<GetParams>, res: Response){
    const { idCart } = req.params
    const useCase = new GetCartFullUseCase()

    const cart = await useCase.handle(Number(idCart))
    return res.json(cart)
}
