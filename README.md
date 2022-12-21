
## Documentação da API

#### Cadastrar Usuário

```http
  POST /user
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. A chave da sua API |
| `email` | `string` | **Obrigatório**. A chave da sua API |
| `password` | `string` | **Obrigatório**. A chave da sua API |

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
| `name` | `string` | **Obrigatório**. A chave da sua API |

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
| `name` | `string` | **Obrigatório**. A chave da sua API |

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
| `name` | `string` | **Obrigatório**. A chave da sua API |
| `description` | `string` | **Obrigatório**. A chave da sua API |
| `priceUnit` | `number` | **Obrigatório**. A chave da sua API |
| `flagActive` | `boolean` | **Obrigatório**. A chave da sua API |
| `brandId` | `number` | **Obrigatório**. A chave da sua API |
| `categoryId` | `number` | **Obrigatório**. A chave da sua API |


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

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.

