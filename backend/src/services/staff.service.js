import Staff from "../models/staff.model.js";
import bcrypt from "bcrypt";
import { customAlphabet } from "nanoid";

class StaffService {
    async create(payload) {
        const customId = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6);
        const customBirthday = (payload.birthday).toISOString().splice(0, 10);

        const staff = new Staff({
            staff_id: `SID-${customId()}`,
            name: payload.name || "",
            username: payload.username,
            password: payload.password,
            role: payload.role || "staff",
            birthday: customBirthday || "",
            gender: payload.gender,
            address: payload.address || "",
            phone: payload.phone || "",
            email: payload.email || "",
        });

        staff.password = await bcrypt.hash(staff.password, 12);
        return await staff.save();
    }

    async find(filter) {
        return await Staff.find(filter);
    }

    async findById(staff_id) {
        return await Staff.findById(staff_id);
    }

    async findByName(name) {
        return await Staff.find({
            name: { $regex: name, $options: "i" }
        });
    }

    async findByUsername(username) {
        return await Staff.findOne({ username });
    }

    async update(staff_id, payload) {
        const existingStaff = await Staff.findById(staff_id);
        if (!existingStaff) {
            throw new Error("Staff not found");
        }

        if (payload.password) {
            payload.password = await bcrypt.hash(payload.password, 12);
        } else {
            delete payload.password;
        }

        const result = await Staff.findByIdAndUpdate(
            staff_id, { $set: payload }, { new: true, runValidators: true }
        );

        return result;
    }

    async deleteOne(staff_id) {
        const result = await Staff.findByIdAndDelete(staff_id);
        return result;
    }

    async deleteAll() {
        const result = await Staff.deleteMany({});
        return result.deletedCount;
    }
}

export default StaffService;