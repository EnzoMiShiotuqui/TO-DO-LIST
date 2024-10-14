# Lista de Tarefas

## O projeto consiste em uma aplicação Full Stack completa com o objetivo de auxiliar na gestão de atividades e tarefas.

# Tecnologias Utilizadas

## Backend

- [NodeJS](https://nodejs.org/en/) <img align="center" alt="NodeJS" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
- [Express](https://expressjs.com/) <img align="center" alt="Express" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg">

## Frontend

- [HTML](https://www.w3schools.com/html/) <img align="center" alt="HTML" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg">
- [CSS](https://www.w3schools.com/css/) <img align="center" alt="CSS" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg">
- [JavaScript](https://www.javascript.com/) <img align="center" alt="JavaScript" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg">

## Banco de Dados

- [MySQL](https://www.mysql.com/) <img align="center" alt="MySQL" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg">

<br>

# Como Usar

### Primeiro, precisamos clonar ou baixar este repositório.

```bash
# Comando para clonar o repositório

$ git clone https://github.com/manualdodev/todolist-fullstack.git

````

### Após clonar o repositório, é necessário criar um banco de dados MySQL junto com as colunas necessárias.
````bash
# Comando para criar um banco de dados no terminal MySQL:

$ CREATE DATABASE nome_do_banco_de_dados;

````

### Em seguida, é necessário criar a tabela "tasks" que será utilizada pela aplicação.


````bash
# Comando para criar a tabela com suas colunas

$ CREATE TABLE tasks(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    status VARCHAR(45) NOT NULL,
    created_at VARCHAR(45) NOT NULL
);
````

### Na raiz do projeto haverá um arquivo chamado ".env.example". Este arquivo contém 5 campos que deverão ser preenchidos em um arquivo chamado ".env". Basta criar esse arquivo ou renomear o arquivo de exemplo. Após isso, preencha os campos com os dados relacionados ao seu banco de dados.

````bash
PORT= [Porta em que o servidor será executado]
MYSQL_HOST= [O host da sua máquina, por padrão é 'localhost']
MYSQL_USER= [Seu nome de usuário, por padrão o MySQL usa o usuário 'root']
MYSQL_PASSWORD= [A senha que você escolheu ao instalar o MySQL]
MYSQL_DB= [O nome do banco de dados criado anteriormente.]
````

#### Antes de iniciar a aplicação, precisamos instalar as 'node_modules' e, para isso, basta abrir um terminal na pasta "backend" (é recomendável usar o terminal do editor/IDE).

````bash 
# Comando para baixar as 'node_modules'

$ npm install

````

#### Finalmente, basta executar o comando para iniciar o servidor (ainda dentro da pasta "backend") e abrir o arquivo "index.html".

```` bash
# Comando para iniciar o servidor.

$ npm start
````


