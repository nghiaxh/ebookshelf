import Book from "../models/book.model.js";
import { customAlphabet } from "nanoid";

class BookService {
    async create(payload) {
        const customId = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6);
        const book = new Book({
            book_id: `ISBN-${customId()}`,
            title: payload.title,
            price: payload.price,
            quantity: payload.quantity,
            published_year: payload.published_year,
            publisher_id: payload.publisher_id,
            author: payload.author,
        });
        return await book.save();
    }

    async find(filter) {
        return await Book.find(filter);
    }

    async findByName(title) {
        return await Book.find({
            title: { $regex: title, $options: "i" }
        });
    }

    async findById(book_id) {
        return await Book.findOne(book_id);
    }

    async update(book_id, payload) {
        const result = await Book.findOneAndUpdate(
            book_id, { $set: payload }, { new: true, runValidators: true }
        );
        return result;
    }

    async delete(book_id) {
        const result = await Book.findOneAndDelete(book_id);
        return result;
    }

    async deleteAll() {
        const result = await Book.deleteMany({});
        return result.deletedCount;
    }
}

export default BookService;