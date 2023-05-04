# Controller

A class controller for a functions or methods, in a books collection db.

```js
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
    let book = new books(req.body);
    try {
      await book.save();
      res.send("Register books!");
    } catch (error) {
      console.log(error);
    }
  };

  static putBooks = async (req, res) => {
    const id = req.params.id;
    try {
      books.findByIdAndUpdate(id, { $set: req.body });
      res
        .status(200)
        .send({ message: "Books update!" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}
```