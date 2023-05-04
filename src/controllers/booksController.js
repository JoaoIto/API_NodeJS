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

  static postBooks = async (req, res) => {
    let book = new books(req.body)
    try{
        await book.save()
        res.send("Register books!")
    }catch(error){
        console.log(error)
    }
  }
}
