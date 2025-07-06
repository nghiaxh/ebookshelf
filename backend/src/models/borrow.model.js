import mongoose from "mongoose";

const borrowSchema = mongoose.Schema({
    user_id: {
        type: String,
        ref: "User",
    },
    staff_id: {
        type: String,
        ref: "Staff",
    },
    book_id: {
        type: String,
        ref: "Book",
    },
    borrow_date: {
        type: Date,
        default: Date.now
    },
    return_date: {
        type: Date
    },
    // quantity: {
    //   type: Number,
    // },
    status: {
        type: String,
        enum: ["borrowed", "returned"],
        default: "borrowed",
    },
},
    {
        timestamps: true,
    }
);

const Borrow = mongoose.model("Borrow", borrowSchema);
export default Borrow;
