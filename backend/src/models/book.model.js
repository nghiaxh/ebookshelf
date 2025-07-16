import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
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
},
    {
        timestamps: true,
    }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;