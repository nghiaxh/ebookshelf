<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { ref } from "vue";
import { useRouter } from "vue-router";
import StaffService from '../services/staff.service';
import { push } from 'notivue';

const router = useRouter();
const staffService = new StaffService();
const name = ref("");
const username = ref("");
const password = ref("");
const phone = ref("");
const address = ref("");

const handleCreateStaff = async () => {
  try {
    const data = {
      name: name.value,
      username: username.value,
      password: password.value,
      phone: phone.value,
      address: address.value
    };
    await staffService.createStaff(data);
    
    push.success("Thêm nhân viên thành công");
    router.push("/staffs");
  } catch (error) {
    console.log(error);
    push.error("Đã xảy ra lỗi khi thêm nhân viên");
  }
}

</script>

<template>
  <div class="flex flex-col min-h-screen justify-center items-center">
    <Header></Header>
    <section class="flex-grow mx-16 my-8">
      <form @submit.prevent=" handleCreateStaff " class="mt-8">
        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
          <legend class="fieldset-legend text-xl">Thêm nhân viên</legend>

          <label class="label">Họ và tên</label>
          <input v-model=" name " type="text" class="input" placeholder="Nhập họ và tên" />

          <label class="label">Địa chỉ</label>
          <input v-model=" address " type="text" class="input" placeholder="Nhập địa chỉ" />

          <label class="label">Số điện thoại</label>
          <input v-model=" phone " type="text" class="input" placeholder="Nhập số điện thoại" />

          <label class="label">Tên đăng nhập</label>
          <input v-model=" username " type="text" class="input" placeholder="Nhập tên đăng nhập" />

          <label class="label">Mật khẩu</label>
          <input v-model=" password " type="password" class="input" placeholder="Nhập mật khẩu" />

          <button class="btn btn-neutral mt-4 hover:scale-[1.01] text-base">Thêm nhân viên</button>

          <span class="mt-8">
            <strong class="hover:underline">
              <RouterLink to="/staffs" class="text-base">Quay lại</RouterLink>
            </strong>
          </span>
        </fieldset>
      </form>
    </section>
    <Footer></Footer>
  </div>
</template>