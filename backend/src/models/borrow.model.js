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
    borrow_date: { type: Date, default: Date.now },
    return_date: { type: Date },

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
