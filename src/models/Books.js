import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    id: { type: String },
    title: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authors",
      required: true,
    },
    production: { type: String, required: true },
    pages: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

export const books = mongoose.model("books", bookSchema);
