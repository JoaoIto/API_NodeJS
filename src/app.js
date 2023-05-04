import express from "express";
import { books } from "./api/books.js";
export const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  let index = getBooks(req.params.id);
  res.json(books[index]);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("book foi cadastrado com sucesso");
});

app.post("/books/:id", (req, res) => {
  books[req.params.id].push(req.body);
  res.status(201).send("book foi cadastrado com sucesso");
});


app.put("/books/:id", (req, res) => {
  let index = getBooks(req.params.id);
  books[index].title = req.body.title;
  res.json(books);
});

app.delete("/books/:id", (req, res) => {
  let { id } = req.params;
  let index = getBooks(id);
  books.splice(index, 1);
  res.send(`book ${id} removido com sucesso`);
});

function getBooks(id) {
  return books.findIndex((book) => book.id == id);
}

app.delete('books/:id', (req, res) => {
    let {id} = req.params;
    let index = getBooks(id);
    books.splice(index, 1);
    res.send(`book ${id} removido!`)
    res.json(books);
})
