import mongoose from "mongoose";

const authorSchema = mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        nacionality: {type: String, required: true},
        age: {type: Number, required: true}
    },
    {
       versionKey: false 
    }
)

export const authors = new mongoose.model("authors", authorSchema);