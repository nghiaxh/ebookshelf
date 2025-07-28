import * as yup from "yup";

export const staffSchema = yup.object({
    name: yup.string().required("Vui lòng nhập họ và tên").min(3, "Vui lòng nhập ít nhất 3 ký tự").max(30, "Tên người dùng tối đa 30 ký tự"),
    username: yup.string().required("Vui lòng nhập tên đăng nhập").min(3, "Vui lòng nhập ít nhất 3 ký tự").max(30, "Tên đăng nhập tối đa 30 ký tự"),
    password: yup.string().required("Vui lòng nhập mật khẩu").min(3, "Vui lòng nhập ít nhất 3 ký tự").max(30, "Mật khẩu tối đa 30 ký tự"),
    address: yup.string().required("Vui lòng nhập địa chỉ").max(100, "Địa chỉ tối đa 100 ký tự."),
    phone: yup.string().required("Vui lòng nhập số điện thoại").matches(/^(09|03|07|08|05)/, "Đầu số điện thoại không hợp lệ.")
        .min(10, "Số điện thoại phải có 10 chữ số"),
});