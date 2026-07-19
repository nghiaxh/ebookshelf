import mongoose from "mongoose";

const staffSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    username: {
        type: String,
        required: true,
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
        default: "staff",
    },
},
    {
        timestamps: true,
    }
);

const Staff = mongoose.model("Staff", staffSchema);
export default Staff;