import { Router } from "express";
import { create, list } from "../controller/category";
const categoryRouter = Router()

categoryRouter.get('/', list)
categoryRouter.get('/:id')
categoryRouter.post('/', create)
categoryRouter.put('/')
categoryRouter.delete('/')

export default categoryRouter