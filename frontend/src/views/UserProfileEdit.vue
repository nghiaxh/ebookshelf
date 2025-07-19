<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { useRouter } from 'vue-router';
import { useRoute } from "vue-router";
import { ref } from "vue";
import UserService from '../services/user.service';

const userService = new UserService();
const router = useRouter();
const route = useRoute();
const user_id = route.params.id;

const first_name = ref("");
const last_name = ref("");
const username = ref("");
const password = ref("");
const address = ref("");
const birthday = ref("");
const gender = ref(undefined);
const phone = ref("");

const cancelUserProfileEdit = () => {
  if (confirm("Cập nhật chưa được lưu, xác nhận thoát?")) {
    router.push("/users");
  }
};

const handleUserProfileEdit = async (user_id) => {
  try {
    const data = {
      first_name: first_name.value,
      last_name: last_name.value,
      username: username.value,
      password: password.value,
      address: address.value,
      birthday: birthday.value,
      gender: gender.value,
      phone: phone.value,
    };

    await userService.updateUser(user_id, data);

    alert("Cập nhật thông tin người dùng thành công");
    router.push("/users");
  } catch (error) {
    alert("Đã xảy ra lỗi khi cập nhật thông tin người dùng");
    console.log(error);
  }
};
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header></Header>
    <div class="flex justify-center items-center flex-grow">
      <form @submit.prevent=" handleUserProfileEdit( user_id )">
        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base shadow">
          <legend class="fieldset-legend text-xl">Cập nhật người dùng</legend>
          <label class="label" for="last_name">Họ lót</label>
          <input v-model=" last_name " type="text" class="input" id="last_name" placeholder="Nhập họ lót" />

          <label class="label" for="first_name">Tên</label>
          <input v-model=" first_name " type="text" class="input" id="first_name" placeholder="Nhập tên" />

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

          <label class="label" for="password">Mật khẩu</label>
          <input v-model=" password " type="password" class="input" id="password" placeholder="Nhập mật khẩu" />
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
            <button class="btn btn-neutral mt-4 hover:scale-[1.01] text-base">Lưu thay đổi</button>
            <button @click=" cancelUserProfileEdit "
              class="btn btn-neutral mt-4 hover:scale-[1.01] text-base">Thoát</button>
          </div>
        </fieldset>
      </form>
    </div>
    <Footer></Footer>
  </div>
</template>