
export interface Purchases{
    id: number
    userId: number
    itemsPurchases: ItemsPurchasesDto[]
    totalValue: number
  }

export interface ItemsPurchasesDto{
    id: number
    name: string
    purchasesId: number
    productId: number
    qty: number
    untValue: number
}
