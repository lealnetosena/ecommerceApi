import { Router } from "express";
import { create, list } from "@controller/product"

const productRouter = Router()

productRouter.get('/', list)
productRouter.get('/:id')
productRouter.post('/', create)
productRouter.put('/')
productRouter.delete('/')

export default productRouter
