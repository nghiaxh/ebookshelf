import mongoose from "mongoose";

const staffSchema = mongoose.Schema({
    staff_id: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
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
