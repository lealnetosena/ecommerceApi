import { NotFoundException } from "@domain/exceptions/notFound";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class SumCartUseCase{
  constructor(){}

  async handle(cartId: number){
    const itemsCart = await prisma.itemsCart.findMany({
        where: {
            cartId: cartId

        }
    })
    if (!itemsCart) {
      throw new NotFoundException("Cart not found")
    }
    const soma = await Promise.all(
        itemsCart.map(
        async (item) => {
            return item.qty * Number(item.untValue)
        }
    )
    )
    if (!soma) {
        throw new NotFoundException("Not found values in cart")
    }

    const totalValue = soma.reduce((cur, sum) => cur+sum)
    //itemsCart.reduce((cur, sum) => cur + sum)
    // const total = Number(soma[1]._sum.untValue) * soma[1].qty
    return totalValue
}
}
