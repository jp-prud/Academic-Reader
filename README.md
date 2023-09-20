<h1 align="center">Serviço Backend - Paper.me</h1>

Esta API, que permite o gerencimento , foi desenvolvida vsando a utilização no projeto "Paper.me" (mais informações vide este **[link](https://link-da-documentação))**.

📌 Status do Projeto: **Em desenvolvimento** ⏳

## 🛠️ Tecnologias

AS seguintes tecnologias e ferramentas foram utilizadas neste projeto: `NestJS, Typescript, PostgreSQL, JWT, Docker, Postman`

## ⚙️ Como utilizar

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

Caso queira utilizar o **Postman** para testar as rotas, utilize o arquivo "" para importar as requisições.
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`API_KEY`

`ANOTHER_API_KEY`


## Funcionalidades

- Temas dark e light
- Preview em tempo real
- Modo tela cheia
- Multiplataforma


## Deploy

Para fazer o deploy desse projeto rode

```bash
  npm run deploy
```

