import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    book_id: {
        type: String, unique: true, required: false,
    },
    title: {
        type: String, required: true,
    },
    price: {
        type: Number, required: false,
    },
    quantity: {
        type: Number, required: true,
    },
    published_year: {
        type: Number, required: true,
    },
    publisher_id: {
        type: String, required: false,
    },
    author: {
        type: String, required: true,
    },
    description: {
        type: String, required: false,
    },
    image: {
        type: String, default: "", required: false,
    }
},
    {
        timestamps: true,
    }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;