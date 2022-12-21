import { Router } from "express";
import { create, list, update } from "@controller/product"
import { validationsMiddleware } from '../middlewares/validations';
import { editproductValidations } from "validators/product";


const productRouter = Router()

productRouter.get('/', list)
productRouter.get('/:id')
productRouter.post('/', create)
productRouter.put('/', editproductValidations,validationsMiddleware, update)
productRouter.delete('/')

export default productRouter
