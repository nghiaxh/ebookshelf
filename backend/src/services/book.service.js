import Book from "../models/book.model.js";
import multer from "multer";
import path from "path";

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
        const book = new Book({
            title: payload.title,
            price: payload.price,
            quantity: payload.quantity,
            published_year: payload.published_year,
            publisher_id: payload.publisher_id,
            author: payload.author,
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

    async findById(id) {
        return await Book.findById(id);
    }

    async update(id, payload) {
        const result = await Book.findByIdAndUpdate(
            id, { $set: payload }, { new: true, runValidators: true }
        );
        return result;
    }

    async delete(id) {
        const result = await Book.findByIdAndDelete(id);
        return result;
    }

    async deleteAll() {
        const result = await Book.deleteMany({});
        return result.deletedCount;
    }
}

export default BookService;