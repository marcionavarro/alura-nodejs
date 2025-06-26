```markdown
# 📚 Express Mongo API

## 📝 Sobre o Projeto

Este projeto é uma API RESTful desenvolvida em **Node.js** utilizando **Express** e **MongoDB** (via Mongoose) para gerenciar um catálogo de livros e autores. Permite operações de CRUD (criar, ler, atualizar e deletar) para livros e autores, sendo ideal para fins didáticos e como base para sistemas de cadastro.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://github.com/motdotla/dotenv)
- [Nodemon](https://nodemon.io/) (para desenvolvimento)

## 📦 Como Clonar e Instalar

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/marcionavarro/alura-nodejs
   cd express-mongo
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
     ```
     PORT=3000
     DB_CONNECTION_STRING=mongodb://localhost:27017/sua-base
     ```

4. **Inicie o servidor em modo desenvolvimento:**
   ```sh
   npm run dev
   ```

   O servidor estará disponível em `http://localhost:3000`.

## 📁 Estrutura de Pastas

```
.env
.gitignore
package.json
server.js
src/
  app.js
  config/
    dbconnect.js
  controllers/
    autorController.js
    livroController.js
  models/
    Autor.js
    Livro.js
  routes/
    autoresRoutes.js
    index.js
    livrosRoutes.js
```

## ✨ Contribuição

Sinta-se à vontade para abrir issues e pull requests!

---

Feito com 💚 por [Marcio Navarro](https://www.marcionavarro.com.br)
