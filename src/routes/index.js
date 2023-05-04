import express from "express";
import { router } from "./booksRoutes.js";

export const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({title: "Curso de node e mongodb"});
    })

    app.use(
        express.json(),
        router
    )
}

