import * as yup from "yup";

export const staffSchema = yup.object({
    name: yup.string().required("Vui lòng nhập họ và tên"),
    username: yup.string().required("Vui lòng nhập tên đăng nhập").min(3, "Vui lòng nhập ít nhất 3 ký tự"),
    password: yup.string().required("Vui lòng nhập mật khẩu").min(3, "Vui lòng nhập ít nhất 3 ký tự"),
    address: yup.string().required("Vui lòng nhập địa chỉ"),
    phone: yup.string().required("Vui lòng nhập số điện thoại")
});