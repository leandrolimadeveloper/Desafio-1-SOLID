# Desafio SOLID - Ignite

## Sobre 
Resolução dos desafios 01 e 02 acerca do assunto SOLID, e documentação feita com Swagger :rocket: :purple_heart:

### Desafio 1 
Criar uma aplicação de cadastro e listagem de usuários utilizando os conceitos de SOLID aprendidos.

### Desafio 2 
Documentar as rotas utiliando o Swagger.

## :white_check_mark: Requisitos

### Rotas da aplicação
- [x] POST /users
- [x] PATCH /users/:user_id/admin
- [x] GET /users/:user_id
- [x] GET /users/:user_id

### Específicação dos testes

#### Teste do model
- [x] Should be able to create an user with all props

#### Testes do repositório
- [x] Should be able to create new users
- [x] Should be able to list all users
- [x] Should be able to find user by ID
- [x] Should be able to find user by e-mail address
- [x] Should be able to turn an user as admin

##### Testes de useCases
- [x] Should be able to create new users
- [x] Should not be able to create new users when email is already taken
- [x] Should be able to turn an user as admin
- [x] Should not be able to turn a non existing user as admin
- [x] Should be able to get user profile by ID
- [x] Should not be able to show profile of a non existing user
- [x] Should be able to list all users
- [x] Should not be able to a non admin user get list of all users
- [x] Should not be able to a non existing user get list of all users

## :computer: Instalação e uso ##

```bash
# Clonar repositório
$ git clone https://github.com/leandrolimadeveloper/Desafio-SOLID-Ignite

# Acessar diretório
$ cd Desafio-SOLID-Ignite

# Instalação de dependências
$ npm i

# Executar aplicação
$ npm run dev

```
O servidor inciará na porta 3333.<br><br>
Para acessar a aplicação: ```http://localhost:3333```<br>
Para acessar a documentação: ```http://localhost:3333/api-docs```
