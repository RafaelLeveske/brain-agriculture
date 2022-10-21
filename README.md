# Brain Agrigulture

## 📝 Conteúdo

- [About](#about)
- [Getting Started](#getting_started)
- [Built Using](#built_using)
- [Author](#authors)

---

## 🏁 About <a name = "about"></a>

- Esse projeto é destinado a cadastro, edição exclusão, e listagem de dashboard de informações associadas. Criado com [NestJS](https://nestjs.com/)

## 🏁 Getting Started <a name = "getting_started"></a>
Para clonar e utilizar essa aplicação você irá precisar do [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/install/) instalados em sua máquina.

Abra o seu terminal para iniciar.

### Configurações para rodar a aplicação localmente:

```bash
# Clone o repositório
$ git clone https://github.com/RafaelLeveske/brain-agriculture.git

# Acesse a pasta do projeto
$ cd brain-agriculture

# Renomear o arquivo .env.example para .env

# Installe as dependências
$ npm install

# Crie o build dos serviços
$ docker compose build

# Crie uma instância postgres e da aplicação usando docker compose
$ docker compose up

```

### Comandos no terminal

```bash
# Execute os testes unitários
$ npm run test:cov

# Inicie o servidor local
$ npm run start:dev
```

## Para testar as rotas da aplicação acesse o link abaixo:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=brain-agriculture&uri=https%3A%2F%2Fraw.githubusercontent.com%2FRafaelLeveske%2Fbrain-agriculture%2Fmaster%2FInsomnia_brain_agriculture.json)


## ⛏️ Built Using <a name = "built_using"></a>

- [Node](https://nodejs.org/en/) - Javascript Runtime Environment.
- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/) - Open-source language which builds on JavaScript.
- [Jest](https://jestjs.io/) - JavaScript Testing Framework with a focus on simplicity.
- [Postgres](https://www.postgresql.org/) - The World's Most Advanced Open Source Relational Database

## ✍️ Author <a name = "authors"></a>

Made by Rafael Vieira 👋 [See my linkedin](https://www.linkedin.com/in/rafael-vieira-506331182/)
