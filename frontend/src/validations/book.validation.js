import * as yup from "yup";

export const bookSchema = yup.object({
    title: yup.string().required("Vui lòng nhập tựa sách"),
    author: yup.string().required("Vui lòng nhập tác giả"),
    quantity: yup.number().required("Vui lòng nhập số lượng").min(1, "Số lượng sách tối thiểu là 1 quyển").typeError("Vui lòng nhập số lượng sách"),
    publisher_id: yup.string().required("Vui lòng chọn nhà xuất bản"),
    price: yup.number().required("Vui lòng nhập đơn giá").min(0, "Đơn giá sách tối thiểu là 0đ").typeError("Vui lòng nhập đơn giá"),
    published_year: yup.number().required("Vui lòng nhập năm xuất bản").min(0, "Năm xuất bản không hợp lệ").typeError("Vui lòng nhập năm xuất bản").min(1500, "Năm xuất bản không hợp lệ")
});