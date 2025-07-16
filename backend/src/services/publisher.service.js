import Publisher from "../models/publisher.model.js";

class PublisherService {
    async create(payload) {
        const publisher = new Publisher({
            name: payload.name,
            address: payload.address
        });
        return await publisher.save();
    }

    async find(filter) {
        return await Publisher.find(filter);
    }

    async findByName(name) {
        return await User.find({
            name: { $regex: new RegExp(name, "i") },
        });
    }

    async findById(id) {
        return await Publisher.findById(id);
    }

    async update(id, payload) {
        const result = await Publisher.findByIdAndUpdate(
            id, { $set: payload }, { new: true, runValidators: true }
        );
        return result;
    }

    async delete(id) {
        const result = await Publisher.findByIdAndDelete(id);
        return result;
    }

    async deleteAll() {
        const result = await Publisher.deleteMany({});
        return result.deletedCount;
    }
}

export default PublisherService;