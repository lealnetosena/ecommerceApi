import { Router } from "express";
import categoryRouter  from "./category.routes"
import brandRouter from "./brand.routes"
import productRouter from "@routes/products.routes" 
const routes = Router()

routes.use('/category', categoryRouter)
routes.use('/brand', brandRouter)
routes.use('/product', productRouter)

export default routes
