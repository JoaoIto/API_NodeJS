# Models

Archive and folder for explain a model in database ***MongoGB***, how start a model books. Types, ids, values, strings, ints, etc...

```js
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true},
  author: { type: String, required: true},
  production: { type: String, required: true},
  pages: { type: Number, required: true},
});

export const books = mongoose.model("books", bookSchema);

```

---