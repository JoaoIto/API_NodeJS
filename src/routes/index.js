import express from "express";
import { books } from "./booksRoutes.js";
import { authors } from "./authorsRoutes.js";

export const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({title: "Curso de node e mongodb"});
    })

    app.use(express.json(), books, authors);
}

