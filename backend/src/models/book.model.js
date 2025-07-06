import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    book_id: {
        type: String,
        required: false,
        unique: true,
    },
    title: {
        type: String, required: true,
    },
    price: {
        type: Number, required: false,
    },
    quantity: {
        type: Number, required: false,
    },
    published_year: {
        type: Number, required: false,
    },
    publisher_id: {
        type: String, required: false,
    },
    author: {
        type: String, required: false,
    },
    genre: {
        type: String, required: false,
    },
    description: {
        type: String, required: false,
    },
    image: {
        type: String,
        default: "",
        required: false,
    }
},
    {
        timestamps: true,
    }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;