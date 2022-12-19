export interface PurchaseDto{
    clientId: number;

    items: ItemsPurchaseDto[]
}

export interface ItemsPurchaseDto{
    productId: number;
    qtd: number;
}