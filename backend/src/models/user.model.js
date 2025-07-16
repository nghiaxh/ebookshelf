import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
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