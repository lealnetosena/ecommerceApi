import { Router } from "express";
import { create, list } from "../controller/brand";
const brandRouter = Router()

brandRouter.get('/',list)
brandRouter.get('/:id')
brandRouter.post('/', create)
brandRouter.put('/')
brandRouter.delete('/')

export default brandRouter