import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://joaovictorpfr:23082005@alura.nsaoy5w.mongodb.net/node_books");

export let db = mongoose.connection;
