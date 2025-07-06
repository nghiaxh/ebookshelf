import mongoose from "mongoose";

const staffSchema = mongoose.Schema({
    staff_id: {
        type: String,
        required: false,
        unique: true,
    },
    name: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
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
