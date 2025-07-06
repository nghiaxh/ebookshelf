import Publisher from "../models/publisher.model.js";
import { customAlphabet } from "nanoid";

class PublisherService {
    async create(payload) {
        const customId = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 6);
        const publisher = new Publisher({
            publisher_id: `PID-${customId()}`,
            name: payload.name,
            address: payload.address
        });
        return await publisher.save();
    }

    async find(filter) {
        return await Publisher.find(filter);
    }

    async findById(publisher_id) {
        return await Publisher.findById(publisher_id);
    }

    async update(publisher_id, payload) {
        const result = await Publisher.findByIdAndUpdate(
            publisher_id, { $set: payload }, { new: true, runValidators: true }
        );
        return result;
    }

    async deleteOne(publisher_id) {
        const result = await Publisher.findByIdAndDelete(publisher_id);
        return result;
    }

    async deleteAll() {
        const result = await Publisher.deleteMany({});
        return result.deletedCount;
    }
}

export default PublisherService;