<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { ref } from "vue";
import UserService from "../services/user.service";
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";
import { userSchema } from "../validations/user.validation";
import { push } from "notivue";

const userService = new UserService();
const router = useRouter();

const { handleSubmit } = useForm({
    validationSchema: userSchema
});

const { value: first_name, errorMessage: first_nameError } = useField("first_name");
const { value: last_name, errorMessage: last_nameError } = useField("last_name");
const { value: username, errorMessage: usernameError } = useField("username");
const { value: password, errorMessage: passwordError } = useField("password");
const { value: birthday, errorMessage: birthdayError } = useField("birthday");
const { value: gender, errorMessage: genderError } = useField("gender");
const { value: address, errorMessage: addressError } = useField("address");
const { value: phone, errorMessage: phoneError } = useField("phone");

const handleCreateUser = handleSubmit(async (values) => {
    try {
        console.log(values)
        await userService.register(values);
        // ? Debug code
        // console.log(data);
        // console.log(response.data);

        push.success("Thêm người dùng thành công");
        router.push("/users");
    } catch (error) {
        console.error(error);
        if (error.response.status === 400) {
            push.error("Vui lòng điền đầy đủ thông tin");
        } else if (error.response.status === 409) {
            push.error("Tên đăng nhập đã tồn tại");
        }
        else {
            push.error("Đã xảy ra lỗi, vui lòng thử lại");
        }
    }
});

</script>

<template>
    <div class="flex flex-col min-h-screen justify-center items-center">
        <Header></Header>
        <section class="flex-grow mx-16">
            <form @submit.prevent=" handleCreateUser ">
                <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
                    <legend class="fieldset-legend text-xl">Thêm người dùng</legend>

                    <label class="label">Họ lót</label>
                    <input v-model=" last_name " type="text" class="input" placeholder="Nhập họ lót" />
                    <span class="text-red-600 text-sm">{{ last_nameError }}</span>

                    <label class="label">Tên</label>
                    <input v-model=" first_name " type="text" class="input" placeholder="Nhập tên" />
                    <span class="text-red-600 text-sm">{{ first_nameError }}</span>

                    <label class="label">Ngày sinh</label>
                    <input v-model=" birthday " type="date" class="input" />
                    <span class="text-red-600 text-sm">{{ birthdayError }}</span>

                    <label class="label">Giới tính</label>
                    <div class="flex gap-8">
                        <div><input v-model=" gender " :value=" true " type="radio" name="radio-1" class="radio mr-1" />
                            <span>Nam</span>
                        </div>
                        <div class=""><input v-model=" gender " :value=" false " type="radio" name="radio-1"
                                class="radio mr-1" />
                            <span>Nữ</span>
                        </div>
                    </div>
                    <span class="text-red-600 text-sm">{{ genderError }}</span>

                    <label class="label">Địa chỉ</label>
                    <input v-model=" address " type="text" class="input" placeholder="Nhập địa chỉ" />
                    <span class="text-red-600 text-sm">{{ addressError }}</span>

                    <label class="label">Số điện thoại</label>
                    <input v-model=" phone " type="text" class="input" placeholder="Nhập số điện thoại" />
                    <span class="text-red-600 text-sm">{{ phoneError }}</span>

                    <label class="label">Tên đăng nhập</label>
                    <input v-model=" username " type="text" class="input" placeholder="Nhập tên đăng nhập" />
                    <span class="text-red-600 text-sm">{{ usernameError }}</span>

                    <label class="label">Mật khẩu</label>
                    <input v-model=" password " type="password" class="input" placeholder="Nhập mật khẩu" />
                    <span class="text-red-600 text-sm">{{ passwordError }}</span>

                    <button type="submit" class="btn btn-neutral mt-4 hover:scale-[1.01] text-base">Thêm người
                        dùng</button>

                    <span class="mt-8">
                        <strong class="hover:underline">
                            <RouterLink to="/users" class="text-base">Quay lại</RouterLink>
                        </strong>
                    </span>
                </fieldset>
            </form>
        </section>
        <Footer></Footer>
    </div>
</template>