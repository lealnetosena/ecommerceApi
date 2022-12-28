
import { ListPurchaseUseCase } from "@useCases/purchase/listAllPurchase";
import { Request, Response } from "express";

export async function list(req: Request, res: Response){
    const useCase = new ListPurchaseUseCase()
    const purchases = await useCase.handle()
    return res.json(purchases)
}