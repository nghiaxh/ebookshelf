import mongoose from "mongoose";

const borrowSchema = mongoose.Schema({
    user_id: {
        type: String,
        ref: "User",
        required: false,
    },
    staff_id: {
        type: String,
        ref: "Staff",
        required: false,
    },
    book_id: {
        type: String,
        ref: "Book",
        required: false,
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
    //   required: true,
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
