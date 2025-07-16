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
        type: mongoose.Schema.ObjectId,
        ref: "Publisher",
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