import * as yup from "yup";

export const publisherSchema = yup.object({
    name: yup.string().required("Vui lòng nhập tên"),
    address: yup.string().required("Vui lòng nhập địa chỉ"),
});