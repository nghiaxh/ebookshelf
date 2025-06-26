import mongoose from "mongoose";

const publisherSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

const publisher = model("Publisher", publisherSchema);
export default publisher;
