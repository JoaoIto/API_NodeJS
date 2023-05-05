import express from "express";
import { bookController } from "../controllers/booksController.js";

export const router = express.Router();
router
.get("/books", bookController.getAllBooks)
.get("/books/:id", bookController.getBook)
.post("/books", bookController.postBooks)
.put("/books/:id", bookController.putBooks)
.delete("/books/:id", bookController.deleteBooks)