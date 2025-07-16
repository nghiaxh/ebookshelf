import Book from "../models/book.model.js";

class BookService {
    async create(payload) {
        try {
            const book = new Book({
                title: payload.title,
                price: payload.price,
                quantity: payload.quantity,
                published_year: payload.published_year,
                publisher_id: payload.publisher_id,
                author: payload.author,
            });
            
            return await book.save();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async find(filter) {
        return await Book.find(filter);
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