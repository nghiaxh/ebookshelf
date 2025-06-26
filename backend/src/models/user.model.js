import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    username: {
        type: String,
        required: true,
    },

    birthday: {
        type: Date,
        required: true,
    },

    gender: {
        type: Boolean,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const user = mongoose.model("User", userSchema);
module.exports = user;
