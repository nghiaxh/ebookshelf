<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { ref } from "vue";
import { useRouter } from "vue-router";
import UserService from '../services/user.service';

const router = useRouter();
const userService = new UserService();

const first_name = ref("");
const last_name = ref("");
const username = ref("");
const password = ref("");
const phone = ref("");
const address = ref("");
const birthday = ref(undefined);
const gender = ref(undefined);

const handleCreateUser = async () => {
    try {
        const data = {
            first_name: first_name.value,
            last_name: last_name.value,
            username: username.value,
            password: password.value,
            birthday: birthday.value,
            phone: phone.value,
            address: address.value,
            gender: gender.value
        };
        await userService.register(data);
        alert("Thêm người dùng thành công");
        router.push("/users");
    } catch (error) {
        console.log(error);
        alert("Đã xảy ra lỗi khi thêm người dùng");
    }
}

</script>

<template>
    <div class="flex flex-col min-h-screen justify-center items-center">
        <Header></Header>
        <section class="flex-grow mx-16 my-8">
            <form @submit.prevent=" handleCreateUser ">
                <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
                    <legend class="fieldset-legend text-xl">Thêm người dùng</legend>

                    <label class="label">Họ lót</label>
                    <input v-model=" last_name " type="text" class="input" placeholder="Nhập họ lót" />

                    <label class="label">Tên</label>
                    <input v-model=" first_name " type="text" class="input" placeholder="Nhập tên" />

                    <label class="label">Ngày sinh</label>
                    <input v-model=" birthday " type="date" class="input" />

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

                    <label class="label">Địa chỉ</label>
                    <input v-model=" address " type="text" class="input" placeholder="Nhập địa chỉ" />

                    <label class="label">Số điện thoại</label>
                    <input v-model=" phone " type="text" class="input" placeholder="Nhập số điện thoại" />

                    <label class="label">Tên đăng nhập</label>
                    <input v-model=" username " type="text" class="input" placeholder="Nhập tên đăng nhập" />

                    <label class="label">Mật khẩu</label>
                    <input v-model=" password " type="password" class="input" placeholder="Nhập mật khẩu" />

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