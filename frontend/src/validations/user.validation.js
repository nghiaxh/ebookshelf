import * as yup from "yup";

const birthdayValidate = new Date();
birthdayValidate.setFullYear(birthdayValidate.getFullYear() - 7);

export const userSchema = yup.object({
    first_name: yup.string().required("Vui lòng nhập tên"),
    last_name: yup.string().required("Vui lòng nhập họ lót"),
    username: yup.string().required("Vui lòng nhập tên đăng nhập").min(3, "Vui lòng nhập ít nhất 3 ký tự"),
    password: yup.string().required("Vui lòng nhập mật khẩu").min(3, "Vui lòng nhập ít nhất 3 ký tự"),
    birthday: yup.date().max(birthdayValidate, "Người dùng phải tối thiểu từ 7 tuổi trở lên")
        .required("Vui lòng chọn ngày sinh").typeError("Vui lòng chọn ngày sinh"),
    gender: yup.boolean().required("Vui lòng chọn giới tính"),
    address: yup.string().required("Vui lòng nhập địa chỉ"),
    phone: yup.string().required("Vui lòng nhập số điện thoại")
});