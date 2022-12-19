export interface CartDto{
    clientId: number;

    items: ItemsCartDto[]
}

export interface ItemsCartDto{
    productId: number;
    qty: number;
}
