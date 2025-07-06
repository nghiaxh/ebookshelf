<script setup>
import { ref } from "vue";
import UserService from "../services/user.service";
import { useRouter } from "vue-router";

const userService = new UserService();

const router = useRouter();

const name = ref("");
const username = ref("");
const password = ref("");
const address = ref("");
const birthday = ref("");
const email = ref("");
const gender = ref(undefined);
const phone = ref("");

const handleUserRegister = async () => {
  try {
    const data = {
      name: name.value,
      username: username.value,
      password: password.value,
      address: address.value,
      birthday: birthday.value,
      email: email.value,
      gender: gender.value,
      phone: phone.value,
    };

    const response = await userService.register(data);
    console.log(response.data);

    // TODO show toast popup 
    alert("Đăng ký người dùng thành công");
    router.push("/user/login");
  } catch (error) {
    alert("Đăng ký thất bại");
    console.error(error.response?.data || error);
  }
};

</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <form @submit.prevent=" handleUserRegister " class="mb-24">
      <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
        <legend class="fieldset-legend text-xl">Đăng ký</legend>

        <label class="label" for="name">Họ và tên</label>
        <input v-model=" name " type="text" class="input" id="name" placeholder="Nhập họ và tên" />

        <label class="label" for="username">Tên đăng nhập</label>
        <input v-model=" username " type="text" class="input" id="username" placeholder="Nhập tên đăng nhập" />

        <label class="label" for="birthday">Ngày sinh</label>
        <input v-model=" birthday " type="date" id="birthday" class="input" />

        <label class="label">Giới tính</label>
        <div class="flex gap-8">
          <div><input v-model=" gender " :value=" true " type="radio" name="radio-1" class="radio mr-1" />
            <span>Nam</span>
          </div>
          <div class=""><input v-model=" gender " :value=" false " type="radio" name="radio-1" class="radio mr-1" />
            <span>Nữ</span>
          </div>
        </div>

        <label class="label">Địa chỉ</label>
        <input v-model=" address " type="text" class="input" placeholder="Nhập địa chỉ" />

        <label class="label">Số điện thoại</label>
        <input v-model=" phone " type="text" class="input" placeholder="Nhập số điện thoại" />

        <label class="label">Email</label>
        <input v-model=" email " type="text" class="input" placeholder="Nhập địa chỉ email" />

        <label class="label" for="password">Mật khẩu</label>
        <input v-model=" password " type="password" class="input" id="password" placeholder="Nhập mật khẩu" />

        <button type="submit" class="btn btn-neutral mt-4 hover:scale-[1.01] text-base">Đăng Ký</button>

        <span class="mt-8">Bạn đã có tài khoản?
          <strong class="hover:underline">
            <RouterLink to="/user/login" class="text-base">Đăng nhập</RouterLink>
          </strong>
        </span>
      </fieldset>
    </form>
  </div>
</template>