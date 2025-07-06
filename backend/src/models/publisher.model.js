import mongoose from "mongoose";

const publisherSchema = mongoose.Schema({
    publisher_id: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
    },
    address: {
        type: String,
    },
},
    {
        timestamps: true,
    }
);

const Publisher = mongoose.model("Publisher", publisherSchema);
export default Publisher;
