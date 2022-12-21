import { Router } from "express";
import categoryRouter  from "./category.routes"
import brandRouter from "./brand.routes"
import productRouter from "@routes/products.routes"
import userRouter from "./user.routes";
import cartRouter from "./cart.routes";
import purchaseRouter from "./purchase.routes";
const routes = Router()

routes.use('/category', categoryRouter)
routes.use('/brand', brandRouter)
routes.use('/product', productRouter)
routes.use('/user', userRouter)
routes.use('/cart', cartRouter)
routes.use('/purchase', purchaseRouter)

export default routes
