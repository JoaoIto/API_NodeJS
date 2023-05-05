import express from "express";
import { BookController } from "../controllers/booksController.js";

export const router = express.Router();
router
.get("/books", BookController.getAllBooks)
.get("/books/:id", BookController.getBook)
.post("/books", BookController.postBooks)
.put("/books/:id", BookController.putBooks)
.delete("/books/:id", BookController.deleteBooks)