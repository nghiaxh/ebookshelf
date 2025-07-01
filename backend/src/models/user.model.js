import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: false,
    },

    username: {
        type: String,
        required: true,
    },

    birthday: {
        type: Date,
        required: false,
    },

    gender: {
        type: Boolean,
        required: false,
    },

    address: {
        type: String,
        required: false,
    },

    phone: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        default: "user",
    }
},
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);
export default User;