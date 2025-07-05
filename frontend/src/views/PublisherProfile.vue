<template>
    <section>
        <div class="lg:grid lg:h-screen lg:place-items-center grid-rows-1">
            <div
                class="max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-1 md:items-center md:gap-4 lg:px-8 lg:py-32">

                <div class="flow-root">
                    <dl class="-my-3 divide-y divide-gray-200 rounded border border-gray-200 text-sm *:even:bg-gray-50">

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
                            <RouterLink to="/publisher/edit" class="btn btn-neutral hover:scale-[1.01]">Chỉnh sửa thông
                                tin</RouterLink>
                            <Modal />
                        </div>

                    </dl>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import Modal from '../components/Modal.vue';
</script>