import { Router } from "express";
import { create, list, addProductCart, closeCart, getCartbyId } from "@controller/cart"
import { validationsMiddleware } from "middlewares/validations";
import { itemsCartValidations } from "validators/itemsCart";

const cartRouter = Router()

cartRouter.get('/', list)
cartRouter.get('/:idCart', getCartbyId)
cartRouter.post('/', create)
cartRouter.post('/close/:idCart', closeCart)
cartRouter.post('/addProductCart',itemsCartValidations, validationsMiddleware,  addProductCart)
cartRouter.put('/')
cartRouter.delete('/')

export default cartRouter
