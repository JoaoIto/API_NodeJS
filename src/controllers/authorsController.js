import { authors } from "../models/Author.js"

export class AuthorController {
  static getAllAuthors = async (req, res) => {
    try {
      const resultAuthors = await authors.find();
      res.status(200).json(resultAuthors);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static getBook = async (req, res) => {
    let id = req.params.id;

    try {
      const resultAuthors = await authors.findById(id);
      res.status(200).send(resultAuthors);
    } catch (error) {
      res.status(400).send({ message: `${error.message}Book not found!` });
    }
  };

  static postAuthors = async (req, res) => {
    let book = new authors(req.body);
    try {
      await book.save();
      res.send({ message: "Register authors!" });
    } catch (error) {
      console.log(error);
    }
  };

  static putAuthors = async (req, res) => {
    let id = req.params.id;
    try {
      const resultAuthors = await authors.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "authors update!" });
      res.send(resultAuthors);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static deleteAuthors = async (req, res) => {
    let id = req.params.id;

    try {
      await authors.findByIdAndDelete(id);
      res.status(200).send({ message: "authors delete!" });
      this.getAllauthors;
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
}
