<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import InputSearch from '../components/InputSearch.vue';

import { useStaffInfo } from '../composables/useStaffInfo';

const { role: staff_role } = useStaffInfo();

</script>

<template>
    <div class="flex flex-col min-h-screen">
        <Header></Header>
        <section class="flex-grow mx-8 my-8">

            <div class="grid grid-cols-1 gap-4 place-items-center">

                <!-- TODO create composable usePublisherList -->
                <InputSearch></InputSearch>

                <template v-if=" staff_role === 'staff' ">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <button class="btn btn-neutral">Thêm nhà xuất bản</button>
                        <button class="btn btn-neutral">Xóa tất nhà xuất bản</button>
                    </div>
                </template>
            </div>

            <div class="lg:grid lg:place-items-center grid-rows-1">
                <div
                    class="max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-1 md:items-center md:gap-4 lg:px-8 lg:py-32">
                    <div class="flow-root">
                        <dl
                            class="-my-3 divide-y divide-gray-200 rounded border border-gray-200 text-sm *:even:bg-gray-50">
                            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                <dt class="font-bold text-black text-xl">Thông tin nhà xuất bản</dt>
                            </div>
                            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                <dt class="font-medium text-gray-900">Tên nhà xuất bản</dt>
                                <dd class="text-gray-700 sm:col-span-2">Kim Đồng</dd>
                            </div>
                            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                <dt class="font-medium text-gray-900">Địa chỉ</dt>
                                <dd class="text-gray-700 sm:col-span-2">248 Cống Quỳnh, Quận 1, TP.HCM</dd>
                            </div>
                            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                <dt class="font-medium text-gray-900">Số điện thoại</dt>
                                <dd class="text-gray-700 sm:col-span-2">028.3838.3838</dd>
                            </div>
                            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                <RouterLink to="/publisher/edit" class="btn btn-neutral hover:scale-[1.01]">Chỉnh sửa
                                    thông
                                    tin</RouterLink>
                                <Modal />
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>