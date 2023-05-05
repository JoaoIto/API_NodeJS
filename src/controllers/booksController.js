import { books } from "../models/Books.js";

export class bookController {
  static getAllBooks = async (req, res) => {
    try {
      const resultBooks = await books.find();
      res.status(200).json(resultBooks);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  static getBook = async (req, res) => {
    let id = req.params.id;

    try {
        const resultBooks = await books.findById(id)
        res.status(200).send(resultBooks);
    } 
      catch(error){
        res.status(400).send({message: `${error.message}Book not found!`})
      } 
  };

  static postBooks = async (req, res) => {
    let book = new books(req.body);
    try {
      await book.save();
      res.send("Register books!");
    } catch (error) {
      console.log(error);
    }
  };

  static putBooks = async (req, res) => {
    let id = req.params.id;
    try {
      const resultBooks = await books.findByIdAndUpdate(id, { $set: req.body });
      res
        .status(200)
        .send({ message: "Books update!" });
        res.send(resultBooks);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static deleteBooks = async (req, res) => {
    let id = req.params.id;
  }
}
