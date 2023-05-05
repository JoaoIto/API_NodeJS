# Controller

A class controller for a functions or methods, in a books collection db.

## Method ``get()``

```js
static getAllBooks = async (req, res) => {
    try {
      const resultBooks = await books.find()
      .populate("author")
      .exec();
      res.status(200).json(resultBooks);
    } catch (error) {
      res.status(500).json({message: `Error in server! ${error}`});
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
  ```
---

## Method `post()`

```js
static postBooks = async (req, res) => {
    let book = new books(req.body);
    try {
      await book.save();
      res.send({message: "Register books!"});
    } catch (error) {
      console.log(error);
    }
  };
```

---
## Method update, `put()`

```js
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
```
---

## Method `delete()`

```js
static deleteBooks = async (req, res) => {
    let id = req.params.id;

    try {
      await books.findByIdAndDelete(id);
      res.status(200)
      .send({ message: "Books delete!" });
      this.getAllBooks
    }catch(error){
      res.status(500).send({ message: error.message});
    };
  }
```

---