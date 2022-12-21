import { CartDto} from "@domain/request/cart"
import { PurchasesDto} from "@domain/request/purchase"

export interface UserDto{
    id: number
    name: string
    email: string
    password: string
    cart: CartDto[]
    purchases: PurchasesDto[]
  }