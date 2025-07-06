import Book from "../models/book.model.js";
import multer from "multer";
import path from "path";
import { customAlphabet } from "nanoid";

class BookService {
    static imageStorage = multer.diskStorage({
        destination: "./uploads/books",
        filename: (req, file, callback) => {
            callback(null, `${Date.now()}${path.extname(file.originalname)}`);
        }
    });

    static uploadImage = multer({
        storage: BookService.imageStorage,
        limits: {
            files: 1,
        }
    });

    async create(payload, image_url) {
        const customId = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6);
        const book = new Book({
            book_id: `ISBN-${customId()}`,
            title: payload.title,
            price: payload.price,
            quantity: payload.quantity,
            published_year: payload.published_year,
            publisher_id: payload.publisher_id,
            author: payload.author,
            genre: payload.genre,
            description: payload.description,
            image: image_url,
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