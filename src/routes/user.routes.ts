import { Router } from "express";
import { create, list } from "@controller/user"

const userRouter = Router()

userRouter.get('/', list)
userRouter.get('/:id')
userRouter.post('/', create)
userRouter.put('/')
userRouter.delete('/')

export default userRouter
