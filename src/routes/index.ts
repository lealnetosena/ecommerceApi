import { Router } from "express";
import categoryRouter  from "./category.routes"
import brandRouter from "./brand.routes"
const routes = Router()

routes.use('/category', categoryRouter)
routes.use('/brand', brandRouter)

export default routes
