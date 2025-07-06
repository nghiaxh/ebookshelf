import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { customAlphabet } from "nanoid";

class UserService {
    async create(payload) {
        const customId = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6);

        const user = new User({
            user_id: `UID-${customId()}`,
            username: payload.username,
            name: payload.name,
            password: payload.password,
            role: payload.role || "user",
            birthday: payload.birthday,
            gender: payload.gender,
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

    async findById(user_id) {
        return await User.findById(user_id);
    }

    async findByName(name) {
        return await User.find({
            name: { $regex: new RegExp(name, "i") },
        });
    }

    async findByUsername(username) {
        return await User.findOne({ username });
    }

    async update(user_id, payload) {
        if (payload.password) {
            payload.password = await bcrypt.hash(payload.password, 12);
        } else {
            delete payload.password;
        }

        const result = await User.findByIdAndUpdate(
            user_id, { $set: payload }, { new: true, runValidators: true }
        );

        if (!result) {
            throw new Error("User not found");
        }

        return result;
    }

    async deleteOne(user_id) {
        const result = await User.findOneAndDelete({ user_id: user_id });
        return result;
    }

    async deleteAll() {
        const result = await User.deleteMany({});
        return result.deletedCount;
    }
}

export default UserService;