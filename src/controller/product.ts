import { ProductDto } from "@domain/request/product";
import { CreateProductUseCase } from "@useCases/createProduct"; 
import { ListProductUseCase } from "@useCases/listProduct";
import { Request, Response } from "express";

export async function create(req: Request<{},{}, Omit<ProductDto, 'id'>>, res: Response){
    const Product  = req.body
    const useCase = new CreateProductUseCase()
    const createdProduct = await useCase.handle(Product)
    return res.json(createdProduct)
}

export async function list(req: Request, res: Response){
    const useCase = new ListProductUseCase()
    const products = await useCase.handle()
    return res.json(products)
}