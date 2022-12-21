import { Router } from "express";
import { create, list, addProductCart } from "@controller/cart"

const cartRouter = Router()

cartRouter.get('/', list)
cartRouter.get('/:id')
cartRouter.post('/', create)
cartRouter.post('/addProductCart', addProductCart)
cartRouter.put('/')
cartRouter.delete('/')

export default cartRouter
