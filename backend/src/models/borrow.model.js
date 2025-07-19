import mongoose from "mongoose";

const borrowSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    staff_id: {
        type: mongoose.Schema.ObjectId,
        ref: "Staff",
    },
    book_id: {
        type: mongoose.Schema.ObjectId,
        ref: "Book",
    },
    borrow_date: {
        type: Date,
        default: Date.now
    },
    return_date: {
        type: Date
    },
    status: {
        type: String,
        enum: ["pending", "approved"],
        default: "pending",
    },
},
    {
        timestamps: true,
    }
);

const Borrow = mongoose.model("Borrow", borrowSchema);
export default Borrow;
