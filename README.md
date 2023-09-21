<h1 align="center">Serviço Backend - Paper.me</h1>

Esta API, que permite o gerencimento de Usuários, Posts,, foi desenvolvida visando a utilização no projeto "Paper.me" (mais informações vide este **[link](https://link-da-documentação))**.

📌 Status do Projeto: **Em desenvolvimento** ⏳

## Tecnologias

AS seguintes tecnologias e ferramentas foram utilizadas neste projeto: `NestJS, Typescript, PostgreSQL, JWT, Docker, Postman`

## Como utilizar

Para consumir esta API, é preciso seguir o passo a passo abaixo ou utilizar a URL do serviço em nuvem  (através deste link: [PapermeAPI](https://google.com)).
## Instalação

Para realizar a instalação do projeto, siga os passos abaixo:

```bash
# Baixe este repositório ou clone pelo Git usando o comando:
$ git clone https://github.com/jp-prud/Paper.me-api.git

# Acesse a pasta do projeto
$ cd Paper.me-api

# Crie um arquivo chamado ".env" na raiz do projeto e copie a estrutuda do arquivo ".env.example" e coloque os seus respectivos dados

# instale as dependencias
$ yarn install
      ou
$ npm install

# Utilize o docker-compose para criar o banco de dados
$ docker-compose up -d

# Utilize o comando do Prisma para sincronizar a estrutura do banco de dados
$ npx prisma migrate deploy

# Inicie o Projeto
$ yarn start
      ou
$ npm run start
```

O servidor inciará localmente na porta 3000 (citada no arquivo .env). Use o Insomnia ou Postman para simular requisições e respostas das rotas (pelo link https://localhost:3000) ou utilize o projeto de aplicativo mobile do "OwlPartners" para executar as funcionalidades da aplicação (acesse o repositório por este [link](https://github.com/jp-prud/Paper.me)).

Caso queira utilizar o **Postman** para testar as rotas, utilize o arquivo "Paper.me.postman_collections.json" para importar as requisições.
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env.

| Variável de Ambiente | Descrição                                       | Utilização                                                                                       |
|-----------------------|-------------------------------------------------|--------------------------------------------------------------------------------------------------|
| `DATABASE_URL`       | URL de conexão com o banco de dados (PostgreSQL)| Configure com os detalhes de conexão do banco de dados, incluindo credenciais, endereço e porta. |
| `JWT_SECRET`         | Chave secreta para tokens JWT                    | Mantenha esta chave em segredo para autenticar com segurança tokens JWT em seu aplicativo.     |
| `PORT`               | Porta de execução do aplicativo                 | Escolha uma porta disponível para acessar seu aplicativo através dela.                           |

## Funcionalidades

- CRUD das entidades mencionadas.
- Sistema de autenticação JWT
