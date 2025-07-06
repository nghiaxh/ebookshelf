import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    user_id: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
    },
    username: {
        type: String,
    },

    birthday: {
        type: Date,
    },

    gender: {
        type: Boolean,
    },

    address: {
        type: String,
    },

    phone: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
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