import { Router } from "express";
import categoryRouter  from "./category.routes"
const routes = Router()

routes.use('/category', categoryRouter)

export default routes
