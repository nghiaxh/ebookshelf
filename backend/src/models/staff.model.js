import mongoose from "mongoose";

const staffSchema = mongoose.Schema({
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
