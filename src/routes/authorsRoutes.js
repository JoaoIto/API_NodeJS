import express from "express";
import { AuthorController } from "../controllers/authorsController.js";

export const authors = express.Router();
authors
  .get("/authors", AuthorController.getAllAuthors)
  .get("/authors/:id", AuthorController.getAuthor)
  .post("/authors", AuthorController.postAuthors)
  .put("/authors/:id", AuthorController.putAuthors)
  .delete("/authors/:id", AuthorController.deleteAuthors);
