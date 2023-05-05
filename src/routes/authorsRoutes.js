import express from "express";
import { AuthorController } from "../controllers/booksController.js";

export const router = express.Router();
router
  .get("/authors", AuthorController.getAllAuthors)
  .get("/authors/:id", AuthorController.getAuthor)
  .post("/authors", AuthorController.postAuthors)
  .put("/authors/:id", AuthorController.putAuthors)
  .delete("/authors/:id", AuthorController.deleteAuthors);
