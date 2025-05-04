# API de Gestão de Usuários - N2 - Segurança da Informação

Esta API foi desenvolvida como parte do projeto N2 de Segurança da Informação. O objetivo da API é gerenciar operações CRUD (Criar, Ler, Atualizar, Excluir) para usuários, utilizando **Node.js**, **Express** e um banco de dados **MySQL**.

## Funcionalidades

- Criar usuário
- Obter todos os usuários
- Obter usuário por ID
- Atualizar usuário
- Deletar usuário

## Tecnologias Utilizadas

- **Node.js** (Backend)
- **Express.js** (Framework Web)
- **MySQL** (Banco de Dados)
- **nodemon** (Para reiniciar automaticamente o servidor)
- **body-parser** (Para interpretar os dados enviados no corpo da requisição)

## Pré-Requisitos

- **Node.js** instalado na máquina.
- **MySQL** instalado e configurado.
- **Postman**, **Insomnia** ou ferramenta similar para testar a API (opcional).

## Instalando e Configurando a API

### 1. Clone o repositório

Primeiramente, clone o repositório do projeto:

```bash
git clone https://github.com/seu-usuario/n2-information-security.git
```

### 2. Instale as dependências

Entre na pasta do projeto e instale as dependências com o npm:

```bash
cd n2-information-security
npm install
```

### 3. Configuração do Banco de Dados

Para configurar o banco de dados **MySQL** e criar as tabelas, siga os passos abaixo:

#### 3.1. Criação do Banco de Dados

Abra o **MySQL Workbench** ou o terminal MySQL e crie um novo banco de dados:

```sql
CREATE DATABASE users_db;
```

#### 3.2. Criação das Tabelas

Com o banco de dados criado, execute a seguinte query para criar a tabela de usuários:

```sql
USE users_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);
```

Isso cria uma tabela chamada `users` com três colunas:
- **id**: chave primária autoincrementada.
- **name**: nome do usuário.
- **email**: e-mail do usuário (único).

#### 3.3. Configuração do Arquivo de Conexão

No arquivo `backend/config/db.js`, insira suas credenciais do MySQL:

```javascript
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha_mysql', // Alterar para sua senha do MySQL
  database: 'users_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados como id ' + connection.threadId);
});

module.exports = connection;
```

Altere o campo `password` com sua senha de acesso ao MySQL.

### 4. Rodando o Servidor

Após a configuração do banco de dados e do arquivo de conexão, inicie o servidor local com o comando:

```bash
npm start
```

Isso iniciará o servidor na porta `3000`, e você poderá acessar a API em `http://localhost:3000`.

O **nodemon** será usado para reiniciar o servidor automaticamente sempre que você fizer alterações no código.

### 5. Testando a API

Você pode testar a API com ferramentas como **Postman** ou **Insomnia**, enviando as seguintes requisições para testar os métodos CRUD:

#### 5.1. Criar um novo usuário (POST)
**Endpoint**: `POST http://localhost:3000/users`

**Body (JSON)**:
```json
{
  "name": "João Duarte",
  "email": "joao@example.com"
}
```

#### 5.2. Obter todos os usuários (GET)
**Endpoint**: `GET http://localhost:3000/users`

#### 5.3. Obter um usuário por ID (GET)
**Endpoint**: `GET http://localhost:3000/users/1`

#### 5.4. Atualizar um usuário (PUT)
**Endpoint**: `PUT http://localhost:3000/users/1`

**Body (JSON)**:
```json
{
  "name": "João Atualizado",
  "email": "joaoatualizado@example.com"
}
```

#### 5.5. Deletar um usuário (DELETE)
**Endpoint**: `DELETE http://localhost:3000/users/1`

## Estrutura de Pastas

A estrutura do projeto está organizada da seguinte forma:

```
n2-information-security/
├── backend/
│   ├── app.js               # Arquivo principal do servidor
│   ├── controllers/         # Contém a lógica das requisições (CRUD)
│   │   └── userController.js
│   ├── routes/              # Define as rotas de acesso
│   │   └── userRoutes.js
│   ├── config/              # Configurações de banco de dados
│   │   └── db.js
├── package.json             # Dependências do projeto
└── README.md                # Documentação do projeto
```

## Contribuindo para o Projeto

Se você deseja contribuir para o projeto, siga estas etapas:

1. Faça um **fork** do repositório.
2. Crie uma **branch** para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas alterações e commit:
   ```bash
   git commit -am "Adiciona nova feature"
   ```
4. Envie suas alterações para o repositório:
   ```bash
   git push origin minha-feature
   ```
5. Abra um **pull request**.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).