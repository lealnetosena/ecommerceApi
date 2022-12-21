export interface CartDto{
    id: number
    userId: number
    totalValue: number
    itemsCart: ItemsCartDto[]
    flagCartClose: boolean
  }
  //*
  
  //
  export interface ItemsCartDto{
    id: number
    cartId: number
    productId: number
    qty: number
    untValue: number
  
  }
