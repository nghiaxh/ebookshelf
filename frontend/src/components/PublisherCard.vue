<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
    publisher: {
        type: Object,
        required: true
    }
});

const goToEditPublisher = (publisher_id) => {
    router.push({ name: "publisher.edit", params: { id: publisher_id } });
}

</script>

<template>
    <div
        class="flex flex-wrap flex-col shadow rounded-lg overflow-hidden hover:shadow-xl hover:scale-[1.01] transition">
        <div class="flow-root">
            <dl class="divide-y divide-gray-200 rounded border border-gray-200 text-sm">
                <div class="grid grid-cols-2 p-1.5">
                    <dt class="font-bold text-gray-900">Tên nhà xuất bản</dt>

                    <dd class="text-gray-800 sm:col-span-2">{{ publisher.name || "Không xác định" }}</dd>
                </div>

                <div class="grid grid-cols-2 p-1.5">
                    <dt class="font-bold text-gray-900">Địa chỉ</dt>

                    <dd class="text-gray-800 sm:col-span-2">{{ publisher.address || "Không xác định" }}</dd>
                </div>

                <div class="grid grid-cols-1">
                    <button @click=" goToEditPublisher( publisher._id )"
                        class="btn btn-ghost text-base hover:underline hover:btn-success hover:text-white">Chỉnh
                        sửa</button>
                </div>

            </dl>
        </div>

    </div>
</template>