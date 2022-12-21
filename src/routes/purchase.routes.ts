import { Router } from "express";
import { list } from "../controller/purchase";
const purchaseRouter = Router()

purchaseRouter.get('/', list)
purchaseRouter.get('/:id')
purchaseRouter.post('/')
purchaseRouter.put('/')
purchaseRouter.delete('/')

export default purchaseRouter