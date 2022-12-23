
## Documentação da API

## Instalação

```http
  npm install
```

## Execução

```http
  npm run dev:server
```

#### Cadastrar Usuário

```http
  POST /user
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**.|
| `email` | `string` | **Obrigatório**. |
| `password` | `string` | **Obrigatório**. |

Exemplo:
```http
{
    "name": "Usuario Teste",
    "email": "userteste@empresa.com",
    "password": "senha"
}
```

#### Cadastrar Marca(Brand)

```http
  POST /brand
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**.  |

Exemplo:
```http
{
    "name": "Samsung"
}
```

#### Cadastrar Categoria(Category)

```http
  POST /category
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. |

Exemplo:
```http
{
    "name": "Eletronicos"
}
```

#### Cadastrar Produto(Product)

```http
  POST /product
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. |
| `description` | `string` | **Obrigatório**.  |
| `priceUnit` | `number` | **Obrigatório**. |
| `flagActive` | `boolean` | **Obrigatório**. |
| `brandId` | `number` | **Obrigatório**. |
| `categoryId` | `number` | **Obrigatório**.  |


Exemplo:
```yaml
{
    "name": "Mouse DELL sem Fio",
    "description": "Mouse DELL sem fio com duas pilhas",
    "priceUnit": 60,
    "flagActive": true,
    "brandId": 1,
    "category": 2
}
```

## Processo Compra
#### Criar Carrinho

```http
  POST /cart
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `userId` | `number` | **Obrigatório**.|


Exemplo:
```http
{
    "userId": 1,
}
```

#### Adicionar Produtos ao carrinho

```http
  POST /cart/addProductCart
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `cartId` | `number` | **Obrigatório**.|
| `productId` | `number` | **Obrigatório**. |
| `qty` | `number` | **Obrigatório**.  |


Exemplo:
```http
{
    "cartId": 7,
    "productId": 2,
    "qty": 1
 }
```

#### Fechar o carrinho

```http
  POST /cart/close/:CartId
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `CartId` | `number` | **Obrigatório**. Route Params |



Exemplo:
```http
http://localhost:3333/cart/close/7
```
## Consultas

```http
http://localhost:3333/user
http://localhost:3333/category
http://localhost:3333/brand
http://localhost:3333/cart
http://localhost:3333/cart/:cartId
http://localhost:3333/product
```

#### Consultas a compras Realizadas

http://localhost:3333/purchase

