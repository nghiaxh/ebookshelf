import User from "../models/user.model.js";
import bcrypt from "bcrypt";

class UserService {
    async create(payload) {
        const user = new User({
            name: payload.name,
            username: payload.username,
            password: payload.password,
            role: payload.role || "user",
            address: payload.address,
            phone: payload.phone,
            email: payload.email,
        });
        
        user.password = await bcrypt.hash(user.password, 12);
        return await user.save();
    }

    async find(filter) {
        return await User.find(filter);
    }

    async findById(id) {
        return await User.findById(id);
    }

    async findByName(name) {
        return await User.find({
            name: { $regex: new RegExp(name, "i") },
        });
    }

    async findByUsername(username) {
        return await User.findOne({ username });
    }

    async update(id, payload) {
        if (payload.password) {
            payload.password = await bcrypt.hash(payload.password, 12);
        } else {
            delete payload.password;
        }

        const result = await User.findByIdAndUpdate(
            id, { $set: payload }, { new: true, runValidators: true }
        );

        if (!result) {
            throw new Error("User not found");
        }

        return result;
    }

    async deleteOne(id) {
        const result = await User.findByIdAndDelete(id);
        return result;
    }

    async deleteAll() {
        const result = await User.deleteMany({});
        return result.deletedCount;
    }
}

export default UserService;