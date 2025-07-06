<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { useAuth } from '../composables/useAuth';
import { useUserInfo } from '../composables/useUserInfo';

const { logOut } = useAuth();
const {
  deleteAccount,
  user_id: user_id,
  username: user_username,
  name: user_name,
  birthday: user_birthday,
  gender: user_gender,
  address: user_address,
  phone: user_phone,
} = useUserInfo();

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header></Header>
    <div class="lg:grid lg:place-items-center grid-rows-1 flex-grow">
      <div
        class="max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-1 md:items-center md:gap-4 lg:px-8 lg:py-32">
        <div class="flow-root">
          <dl class="divide-y divide-gray-200 rounded border border-gray-200 text-sm *:even:bg-gray-50">
            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-bold text-black text-xl">Thông tin người dùng</dt>
            </div>
            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-medium text-gray-900">ID Người dùng</dt>
              <dd class="text-gray-700 sm:col-span-2">{{ user_id }}</dd>
            </div>
            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-medium text-gray-900">Họ và tên</dt>
              <dd class="text-gray-700 sm:col-span-2">{{ user_name }}</dd>
            </div>
            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-medium text-gray-900">Tên đăng nhập</dt>
              <dd class="text-gray-700 sm:col-span-2">{{ user_username }}</dd>
            </div>
            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-medium text-gray-900">Ngày sinh</dt>
              <dd class="text-gray-700 sm:col-span-2">{{ new Date( user_birthday ).toLocaleDateString( 'vi-VN' ) }}</dd>
            </div>
            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-medium text-gray-900">Giới tính</dt>
              <template v-if=" user_gender === 'true' ">
                <dd class="text-gray-700 sm:col-span-2">Nam</dd>
              </template>
              <template v-if=" user_gender === 'false' ">
                <dd class=" text-gray-700 sm:col-span-2">Nữ</dd>
              </template>
            </div>
            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-medium text-gray-900">Địa chỉ</dt>
              <dd class="text-gray-700 sm:col-span-2">{{ user_address }}</dd>
            </div>
            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-medium text-gray-900">Số điện thoại</dt>
              <dd class="text-gray-700 sm:col-span-2">{{ user_phone }}</dd>
            </div>
            <div class="grid grid-cols-1 gap-1 p-3 lg:grid-cols-3 sm:gap-4">
              <RouterLink to="/userprofile/edit" class="btn btn-neutral hover:scale-[1.01]">Chỉnh sửa thông tin
              </RouterLink>
              <!-- TODO show modal view popup later-->
              <button @click=" logOut " class="btn btn-neutral hover:scale-[1.01]">Đăng xuất</button>
              <button @click=" deleteAccount " class="btn btn-neutral hover:scale-[1.01]">Xóa tài khoản</button>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>