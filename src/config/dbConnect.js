import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://joaovictorpfr:23082005@alura.nsaoy5w.mongodb.net/?retryWrites=true&w=majority"
);

let db = mongoose.connection;

export default db;
