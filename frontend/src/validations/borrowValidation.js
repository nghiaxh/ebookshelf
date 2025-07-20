import * as yup from "yup";

export const borrowSchema = yup.object({
    return_date: yup.date().required("Vui lòng chọn ngày trả").min(new Date(), "Ngày trả phải sau ngày mượn").typeError("Vui lòng chọn ngày trả"),
});
