import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate: {
            validator: function(v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(v);
            },
            message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        }
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
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
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