import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    book_id: {
        type: String,
        unique: true,
    },
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    published_year: {
        type: Number,
    },
    publisher_id: {
        type: String,
    },
    author: {
        type: String,
    },
    genre: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        default: "",
    }
},
    {
        timestamps: true,
    }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;