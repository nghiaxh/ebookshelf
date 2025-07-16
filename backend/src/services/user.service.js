import User from "../models/user.model.js";
import bcrypt from "bcrypt";

class UserService {
    async create(payload) {
        const user = new User({
            username: payload.username,
            first_name: payload.first_name,
            last_name: payload.last_name,
            password: payload.password,
            role: payload.role || "user",
            birthday: payload.birthday,
            gender: payload.gender,
            address: payload.address,
            phone: payload.phone,
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

    async delete(id) {
        const result = await User.findByIdAndDelete(id);

        if (!result) {
            throw new Error(`User with ID ${id} not found`);
        }
        return result;
    }

    async deleteAll() {
        const result = await User.deleteMany({});
        return result.deletedCount;
    }
}

export default UserService;