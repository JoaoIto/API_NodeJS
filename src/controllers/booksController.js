import { books } from "./models/Books.js";

export class bookController {

    static listBook = async (req, res) => {
          try {
            const resultBooks = await books.find();
            res.status(200).json(resultBooks);
          } catch (err) {
            res.status(500).json(err);
          }
        };
    }
