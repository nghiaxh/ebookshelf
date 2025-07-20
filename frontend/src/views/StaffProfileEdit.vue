<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { useRouter } from 'vue-router';
import { useRoute } from "vue-router";
import { ref } from "vue";
import { push } from 'notivue';
import { useForm, useField } from "vee-validate";
import { staffSchema } from '../validations/staffValidation';
import StaffService from '../services/staff.service';

const router = useRouter();
const route = useRoute();
const staffService = new StaffService();
const { handleSubmit, meta } = useForm({
  validationSchema: staffSchema
});

const staff_id = route.params.id;

const { value: name, errorMessage: nameError } = useField("name");
const { value: username, errorMessage: usernameError } = useField("username");
const { value: password, errorMessage: passwordError } = useField("password");
const { value: address, errorMessage: addressError } = useField("address");
const { value: phone, errorMessage: phoneError } = useField("phone");

const handleStaffProfileEdit = async (staff_id) => {
  // if (!meta.value.valid) {
  //   push.error("Vui lòng điền đầy đủ thông tin");

  // }
  try {
    const data = {
      name: name.value,
      username: username.value,
      password: password.value,
      address: address.value,
      phone: phone.value,
    };
    await staffService.updateStaff(staff_id, data);

    push.success("Cập nhật thông tin nhân viên thành công");
    router.push("/staffs");
  } catch (error) {
    push.error("Đã xảy ra lỗi khi cập nhật thông tin nhân viên");
    console.log(error);
  }
};

const handleStaffProfileDelete = async (staff_id) => {
  try {
    if (confirm("Xác nhận xóa nhân viên?")) {
      await staffService.deleteStaff(staff_id);
      push.success("Xóa nhân viên thành công");
      router.push("/staffs");
    }
  } catch (error) {
    push.error("Đã xảy ra lỗi khi xóa nhân viên");
  }
};
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header></Header>
    <div class="flex justify-center items-center flex-grow">
      <form @submit.prevent>
        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base shadow">
          <legend class="fieldset-legend text-xl">Cập nhật thông tin nhân viên</legend>
          <label class="label" for="name">Họ và tên</label>
          <input v-model=" name " type="text" class="input" id="name" placeholder="Nhập họ và tên" />
          <span class="text-sm text-red-600">{{ nameError }}</span>


          <label class="label">Địa chỉ</label>
          <input v-model=" address " type="text" class="input" placeholder="Nhập địa chỉ" />
          <span class="text-sm text-red-600">{{ addressError }}</span>

          <label class="label">Số điện thoại</label>
          <input v-model=" phone " type="text" class="input" placeholder="Nhập số điện thoại" />
          <span class="text-sm text-red-600">{{ phoneError }}</span>

          <label class="label" for="username">Tên đăng nhập</label>
          <input v-model=" username " type="text" class="input" id="username" placeholder="Nhập tên đăng nhập" />
          <span class="text-sm text-red-600">{{ usernameError }}</span>

          <label class="label" for="password">Mật khẩu</label>
          <input v-model=" password " type="password" class="input" id="password" placeholder="Nhập mật khẩu" />
          <span class="text-sm text-red-600">{{ passwordError }}</span>

          <div class="grid grid-cols-2 gap-2">
            <button class="btn btn-neutral mt-4 hover:scale-[1.01] text-base"
              @click=" handleStaffProfileEdit( staff_id )">Lưu thay đổi</button>
            <button class="btn btn-neutral mt-4 hover:scale-[1.01] text-base"
              @click=" handleStaffProfileDelete( staff_id )">Xóa</button>
          </div>
          <span class="mt-4">
            <strong class="hover:underline">
              <RouterLink to="/staffs" class="text-base">Quay lại</RouterLink>
            </strong>
          </span>
        </fieldset>
      </form>
    </div>
    <Footer></Footer>
  </div>
</template>