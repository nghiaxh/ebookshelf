<script setup>
    import { useRouter } from "vue-router";

    const router = useRouter();

    const props = defineProps({
        user: {
            type: Object,
            required: true
        }
    });

    const goToEditUser = (user_id) => {
        router.push({ name: "userprofile.edit", params: { id: user_id } });
    };
</script>

<template>
    <div
        class="flex flex-wrap flex-col shadow rounded-lg overflow-hidden hover:shadow-lg hover:scale-[1.001] transition">
        <div class="flow-root">
            <dl class="divide-y divide-gray-200 rounded border border-gray-200 text-sm">
                <div class="grid grid-cols-2 p-2">
                    <dt class="font-bold text-gray-900">Họ lót</dt>

                    <dd class="text-gray-800 sm:col-span-2">{{ user.last_name || "Không xác định" }}</dd>
                </div>

                <div class="grid grid-cols-2 p-2">
                    <dt class="font-bold text-gray-900">Tên</dt>

                    <dd class="text-gray-800 sm:col-span-2">{{ user.first_name || "Không xác định" }}</dd>
                </div>

                <div class="grid grid-cols-2 p-2">
                    <dt class="font-bold text-gray-900">Tên đăng nhập</dt>

                    <dd class="text-gray-800 sm:col-span-2">{{ user.username || "Không xác định" }}</dd>
                </div>

                <div class="grid grid-cols-2 p-2">
                    <dt class="font-bold text-gray-900">Ngày sinh</dt>

                    <dd class="text-gray-800 sm:col-span-2">{{ user.birthday ? new Date( user.birthday
                    ).toLocaleDateString(
                        'vi-VN' ) :
                        "Không xác định" }}</dd>
                </div>

                <div class="grid grid-cols-2 p-2">
                    <dt class="font-bold text-gray-900">Giới tính</dt>
                    <template v-if=" user.gender === true ">
                        <dd class="text-gray-800 sm:col-span-2">Nam</dd>
                    </template>
                    <template v-else-if=" user.gender === false ">
                        <dd class=" text-gray-800 sm:col-span-2">Nữ</dd>
                    </template>
                    <template v-else>
                        <dd class=" text-gray-800 sm:col-span-2">Không xác định</dd>
                    </template>
                </div>

                <div class="grid grid-cols-2 p-2">
                    <dt class="font-bold text-gray-900">Địa chỉ</dt>

                    <dd class="text-gray-800 sm:col-span-2">{{ user.address || "Không xác định" }}</dd>
                </div>

                <div class="grid grid-cols-2 p-2">
                    <dt class="font-bold text-gray-900">Số điện thoại</dt>

                    <dd class="text-gray-800 sm:col-span-2">{{ user.phone || "Không xác định" }}</dd>
                </div>
                <div class="grid grid-cols-1">
                    <button @click=" goToEditUser( user._id )"
                        class="btn btn-ghost text-base hover:underline hover:btn-success hover:text-white">Chỉnh
                        sửa</button>
                </div>
            </dl>
        </div>

    </div>
</template>