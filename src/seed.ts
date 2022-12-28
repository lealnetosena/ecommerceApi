import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function seed(){

    await prisma.brands.upsert({
        create:{
            nameBrand: "Samsung"
        },
        update:{
            nameBrand: "Samsung"
        },
        where:{
            id: 1
        }
    })
    await prisma.brands.upsert({
        create:{
            nameBrand: "Xiaomi"
        },
        update:{
            nameBrand: "Xiaomi"
        },
        where:{
            id: 2
        }
    }) 
    await prisma.brands.upsert({
        create:{
            nameBrand: "Iphone"
        },
        update:{
            nameBrand: "Iphone"
        },
        where:{
            id: 3
        }
    }) 
    await prisma.brands.upsert({
        create:{
            nameBrand: "Nacional Moveis e Eletrodomésticos"
        },
        update:{
            nameBrand: "Nacional Moveis e Eletrodomésticos"
        },
        where:{
            id: 4
        }
    }) 
    await prisma.brands.upsert({
        create:{
            nameBrand: "DELL Inc"
        },
        update:{
            nameBrand: "DELL Inc"
        },
        where:{
            id: 5
        }
    })
    await prisma.brands.upsert({
        create:{
            nameBrand: "LG"
        },
        update:{
            nameBrand: "LG"
        },
        where:{
            id: 6
        }
    }) 

}