# Projeto Node.js com CRUD e Caching

Este é um projeto Node.js que demonstra como criar um aplicativo com operações CRUD (Create, Read, Update, Delete) usando o framework Express. Além disso, o projeto também implementa caching para melhorar o desempenho.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/MarcosPauloA/node.jsApp
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd seu-projeto
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias:

   ```env
        MYSQL_HOST=localhost
        MYSQL_USER=root
        MYSQL_PASS=SenhaDoSeuBancoDeDados
        MYSQL_DB=NomeDoSeuBancoDeDados
        MYSQL_PORT=Porta em que o servidor Express será executado.
   ```

## Uso

1. Inicie o servidor:

   ```bash
   npm run nodemon
   ```

2. Acesse o aplicativo em [http://localhost:3000](http://localhost:3000).

## Rotas

- `GET /`: Página inicial.
- `GET /produtos`: Lista todos os produtos.
- `GET /produtos/:id`: Exibe detalhes de um produto específico.
- `POST /produtos`: Cria um novo produto.
- `PUT /produtos/:id`: Atualiza os detalhes de um produto existente.
- `DELETE /produtos/:id`: Remove um produto.

## Caching

O caching está implementado para melhorar o desempenho das rotas. Os dados são armazenados em cache por um determinado período de tempo.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novos recursos. Abra uma issue ou envie um pull request!
