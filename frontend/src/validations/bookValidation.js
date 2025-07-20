import * as yup from "yup";

export const bookSchema = yup.object({
    book_title: yup.string().required("Vui lòng nhập tựa sách"),
    author: yup.string().required("Vui lòng nhập tác giả"),
    quantity: yup.number().required("Vui lòng nhập số lượng").min(1, "Số lượng sách tối thiểu là 1 quyển"),
    publisher_id: yup.string().required("Vui lòng chọn nhà xuất bản")
});