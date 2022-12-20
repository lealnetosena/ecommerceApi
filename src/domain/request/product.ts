import { ItemsCartDto } from '@domain/request/cart'
import { ItemsPurchasesDto } from '@domain/request/purchase'

export interface ProductDto{
    id: number
    name: string 
    brandId: number
    description: string
    categoryId: number
    priceUnit: number
    flagActive: boolean
    itemsCart: ItemsCartDto[]
    itemsPurchases: ItemsPurchasesDto[]
  }



  