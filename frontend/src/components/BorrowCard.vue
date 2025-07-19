<script setup>
import { useRouter } from "vue-router";
import { ref, computed, onMounted } from 'vue';
import BorrowService from "../services/borrow.service";

const role = computed(() => localStorage.getItem("role"));
const router = useRouter();
const borrowService = new BorrowService();

const props = defineProps({
    borrow: {
        type: Object,
        required: true
    }
});

const handleApproveBook = (borrow_id) => {

};
</script>

<template>
    <div
        class="flex flex-wrap flex-col shadow rounded-lg overflow-hidden hover:shadow-xl hover:scale-[1.01] transition">
        <div class="flow-root">
            <dl class="divide-y divide-gray-200 rounded border border-gray-200 text-sm">
                <div class="grid grid-cols-2 p-2">
                    <dt class="font-bold text-gray-900">Mã người mượn</dt>

                    <dd class="text-gray-800 sm:col-span-2">{{ borrow.user_id || "Không xác định"
                        }}</dd>
                </div>

                <div class="grid grid-cols-2 p-2">
                    <dt class="font-bold text-gray-900">Mã sách</dt>

                    <dd class="text-gray-800 sm:col-span-2">{{ borrow.book_id || "Không xác định" }}</dd>
                </div>

                <div class="grid grid-cols-2 p-2">
                    <dt class="font-bold text-gray-900">Ngày mượn</dt>

                    <dd class="text-gray-800 sm:col-span-2">{{ borrow.borrow_date ? new
                        Date( borrow.borrow_date ).toLocaleString( "vi-VN" ) : "Không xác định" }}</dd>
                </div>

                <div class="grid grid-cols-2 p-2">
                    <dt class="font-bold text-gray-900">Ngày trả</dt>

                    <dd class="text-gray-800 sm:col-span-2">{{ borrow.return_date ? new
                        Date( borrow.return_date ).toLocaleString( "vi-VN" ) : "Không xác định" }}</dd>
                </div>

                <div class="grid grid-cols-2 p-2">
                    <dt class="font-bold text-gray-900">Trạng thái</dt>

                    <template v-if=" borrow.status === 'pending' ">
                        <dd class="text-amber-500 font-bold sm:col-span-2">Chờ duyệt</dd>
                    </template>
                    <template v-else-if=" borrow.status === 'approved' ">
                        <dd class="text-emerald-500 font-bold sm:col-span-2">Đã duyệt</dd>
                    </template>
                    <template v-else>
                        <dd class="text-gray-500 font-bold sm:col-span-2">Không xác định</dd>
                    </template>
                </div>

                <template v-if=" role === 'staff' ">
                    <template v-if=" borrow.status === 'pending' ">
                        <div class="grid grid-cols-1">
                            <button @click=" handleApproveBook( borrow._id )"
                                class="btn btn-ghost text-base hover:underline hover:btn-success hover:text-white">Duyệt
                                sách</button>
                        </div>
                    </template>
                    <template v-else>
                        <div class="grid grid-cols-1">
                            <button disabled @click=" handleApproveBook( borrow._id )"
                                class="btn btn-ghost text-base hover:underline hover:btn-success hover:text-white">Duyệt
                                sách</button>
                        </div>
                    </template>
                </template>
                <template v-if=" role === 'user' ">
                    <template v-if=" borrow.status === 'pending' ">
                        <div class="grid grid-cols-1">
                            <button disabled @click=" handleReturnBook( borrow._id )"
                                class="btn btn-ghost text-base hover:underline hover:btn-success hover:text-white">Trả
                                sách</button>
                        </div>
                    </template>
                    <template v-if=" borrow.status === 'approved' ">
                        <div class="grid grid-cols-1">
                            <button @click=" handleReturnBook( borrow._id )"
                                class="btn btn-ghost text-base hover:underline hover:btn-success hover:text-white">Trả
                                sách</button>
                        </div>
                    </template>
                </template>
            </dl>
        </div>

    </div>
</template>