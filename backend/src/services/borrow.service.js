import Borrow from "../models/borrow.model.js";

class BorrowService {

    async create(payload) {
        const borrow = new Borrow({
            user_id: payload.user_id,
            book_id: payload.book_id,
            staff_id: payload.staff_id,
            borrow_date: payload.borrow_date || new Date(),
            return_date: payload.return_date || null,
            status: payload.status || "borrowed"
        });
        return await borrow.save();
    }

    async find(filter) {
        return await Borrow.find(filter);
    }

    async findById(id) {
        return await Borrow.findById(id);
    }

    async update(id, payload) {
        const result = await Borrow.findByIdAndUpdate(
            id,
            { $set: payload },
            {
                new: true,
                runValidators: true
            }
        );
        return result;
    }

    async checkReturned(id, return_date = new Date()) {
        const result = await Borrow.findByIdAndUpdate(
            id,
            {
                $set: {
                    status: "returned",
                    return_date: return_date
                }
            },
            {
                new: true,
                runValidators: true
            }
        );
        return result;
    }

    async delete(id) {
        const result = await Borrow.findByIdAndDelete(id);
        return result;
    }

    async deleteAll() {
        const result = await Borrow.deleteMany({});
        return result.deletedCount;
    }

    // async findByBook(book_id) {
    //     return await this.find({ book_id });
    // }

    // async findByStatus(status) {
    //     return await this.find({ status });
    // }

    // async findBorrowedBooks() {
    //     return await this.find({ status: "borrowed" });
    // }

    // async findReturnedBooks() {
    //     return await this.find({ status: "returned" });
    // }
}

export default BorrowService;