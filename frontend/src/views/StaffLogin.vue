<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import StaffService from '../services/staff.service';

const staffService = new StaffService();

const router = useRouter();

const username = ref("");
const password = ref("");

const handleStaffLogin = async () => {
    try {
        const response = await staffService.login(username.value, password.value);

        // console.log(response.data);

        if (response?.data?.token) {
            localStorage.setItem("authenticateToken", response.data.token);
            localStorage.setItem("username", response.data.staff.username);
            localStorage.setItem("id", response.data.staff.id);
            localStorage.setItem("role", "staff");
            router.push("/books");
        }

    } catch (error) {
        alert("Đăng nhập thất bại");
        console.log(error.response?.data || error);
    }
};
</script>

<template>
    <div class="bg-cover bg-[url(/images/t3_luan_van.jpg)]">
        <div
            class="backdrop-brightness-50 backdrop-blur-xs grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8 place-items-center h-screen">
            <form @submit.prevent class="mb-24">
                <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base shadow">
                    <!-- User login -->
                    <h1 class="font-bold text-2xl text-center mb-4">Đăng Nhập Nhân Viên</h1>

                    <label class="label" for="username">Tên đăng nhập</label>
                    <input v-model=" username " id="username" type="text" minlength="3" maxlength="18" class="input"
                        required placeholder="Nhập tên đăng nhập" />

                    <label class="label" for="password">Mật khẩu</label>
                    <input v-model=" password " id="password" type="password" minlength="3" maxlength="18" class="input"
                        required placeholder="Nhập mật khẩu" />

                    <button @click=" handleStaffLogin " type="submit"
                        class="btn btn-neutral mt-4 text-base hover:scale-[1.01]">Đăng
                        Nhập</button>

                    <span class="mt-8">Bạn là người dùng? <strong class="hover:underline">
                            <RouterLink to="/user/login">Đăng nhập</RouterLink>
                        </strong></span>
                </fieldset>
            </form>
        </div>
    </div>
</template>
