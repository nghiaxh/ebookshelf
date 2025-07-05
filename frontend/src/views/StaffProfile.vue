<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth';

const { logOut } = useAuth();

const name = ref("");
const username = ref("");
const birthday = ref("");
const address = ref("");
const gender = ref("");
const phone = ref("");

</script>

<template>
    <Header></Header>
    <div class="lg:grid lg:h-screen lg:place-items-center grid-rows-1">
        <div
            class="max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-1 md:items-center md:gap-4 lg:px-8 lg:py-32">

            <div class="flow-root">
                <dl class="-my-3 divide-y divide-gray-200 rounded border border-gray-200 text-sm *:even:bg-gray-50">

                    <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-bold text-black text-xl">Thông tin nhân viên</dt>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Họ và tên</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ name }}</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Tên đăng nhập</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ username }}</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Ngày sinh</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ birthday }}</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Giới tính</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ gender }}</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Địa chỉ</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ address }}</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Số điện thoại</dt>
                        <dd class="text-gray-700 sm:col-span-2">{{ phone }}</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 lg:grid-cols-2 sm:gap-4">
                        <RouterLink to="/staffprofile/edit" class="btn btn-neutral hover:scale-[1.01]">Chỉnh sửa thông
                            tin
                        </RouterLink>
                        <button @click=" logOut " class="btn btn-neutral hover:scale-[1.01]">Đăng xuất</button>
                    </div>
                </dl>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>