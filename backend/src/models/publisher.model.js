import mongoose from "mongoose";

const publisherSchema = mongoose.Schema({
    publisher_id: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
},
    {
        timestamps: true,
    }
);

const Publisher = mongoose.model("Publisher", publisherSchema);
export default Publisher;
