import Staff from "../models/staff.model.js";
import bcrypt from "bcrypt";

class StaffService {
    async create(payload) {
        const staff = new Staff({
            name: payload.name,
            username: payload.username,
            password: payload.password,
            role: payload.role || "staff",
            address: payload.address,
            phone: payload.phone,
            email: payload.email,
        });
        
        staff.password = await bcrypt.hash(staff.password, 12);
        return await staff.save();
    }

    async find(filter) {
        return await Staff.find(filter);
    }

    async findById(id) {
        return await Staff.findById(id);
    }

    async findByName(name) {
        return await Staff.find({
            name: { $regex: name, $options: "i" }
        });
    }

    async findByUsername(username) {
        return await Staff.findOne({ username });
    }

    async update(id, payload) {
        const existingStaff = await Staff.findById(id);
        if (!existingStaff) {
            throw new Error("Staff not found");
        }

        if (payload.password) {
            payload.password = await bcrypt.hash(payload.password, 12);
        } else {
            delete payload.password;
        }

        const result = await Staff.findByIdAndUpdate(
            id, { $set: payload }, { new: true, runValidators: true }
        );

        return result;
    }

    async deleteOne(id) {
        const result = await Staff.findByIdAndDelete(id);
        return result;
    }

    async deleteAll() {
        const result = await Staff.deleteMany({});
        return result.deletedCount;
    }
}

export default StaffService;