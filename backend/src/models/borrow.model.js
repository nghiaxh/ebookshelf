import mongoose from "mongoose";

const borrowSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    staff_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff",
        required: true,
    },
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    // quantity: {
    //   type: Number,
    //   required: true,
    // },
    borrow_date: { type: Date, default: Date.now },
    return_date: { type: Date },
    status: {
        type: String,
        enum: ["borrowed", "returned"],
        default: "borrowed",
    },
});

const borrow = model("Borrow", borrowSchema);
export default borrow;
