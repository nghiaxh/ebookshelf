<script setup>
import { useRouter } from "vue-router";
import { ref, computed, onMounted, defineEmits } from 'vue';
import BorrowService from "../services/borrow.service";
import UserService from "../services/user.service";
import BookService from "../services/book.service";
import { push } from "notivue";

const role = computed(() => localStorage.getItem("role"));
const router = useRouter();
const borrowService = new BorrowService();
const userService = new UserService();
const bookService = new BookService();

const props = defineProps({
    borrow: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(["fetchBorrows"]);

const book_title = ref("");
const first_name = ref("");
const last_name = ref("");
const book_quantity = ref(undefined);

const handleApproveBook = async (borrow_id) => {
    try {
        await borrowService.updateBorrow(borrow_id, { status: "approved" });
        if (book_quantity <= 0) {
            push.error("Số lượng sách đã hết");
        } else { await bookService.updateBook(props.borrow.book_id, { quantity: book_quantity.value - 1 }); }
        push.success("Duyệt sách thành công");
        emit("fetchBorrows");
    } catch (error) {
        console.log(error);
        push.error("Đã xảy ra lỗi khi duyệt sách");
    }
};

const handleReturnBook = async (borrow_id) => {
    try {
        await bookService.updateBook(props.borrow.book_id, { quantity: book_quantity.value + 1 });
        await borrowService.deleteBorrow(borrow_id);
        push.success("Trả sách thành công");
        emit("fetchBorrows");
    } catch (error) {
        console.log(error);
        push.error("Đã xảy ra lỗi khi trả sách");
    }
};

const goToEditBorrow = async (borrow_id) => {
    router.push({ name: "borrow.edit", params: { id: borrow_id } });
};

onMounted(async () => {
    try {
        const book_data = await bookService.getBook(props.borrow.book_id);
        const user_data = await userService.getUser(props.borrow.user_id);
        book_title.value = book_data.title;
        first_name.value = user_data.first_name;
        last_name.value = user_data.last_name;
        book_quantity.value = book_data.quantity;
    } catch (error) {
        console.log(error);
        push.error("Đã xảy ra lỗi khi truy cập dữ liệu sách");
    }
});
</script>

<template>
    <div
        class="flex flex-wrap flex-col shadow rounded-lg overflow-hidden hover:shadow-lg hover:scale-[1.001] transition">
        <div class="flow-root">

            <!-- <img alt="Book cover" :src=" `https://picsum.photos/seed/${ borrow.book_id }/800` "
                class="shadow-md object-cover" /> -->

            <dl class="divide-y divide-gray-200 rounded border border-gray-200 text-sm">
                <div class="grid grid-cols-2 p-2">
                    <dt class="font-bold text-gray-900">Người mượn</dt>

                    <dd class="text-gray-800 sm:col-span-2">{{ ( last_name && first_name ) ? `${ last_name } ${ first_name }` : "Không xác định" }}</dd>
                </div>

                <div class="grid grid-cols-2 p-2">
                    <dt class="font-bold text-gray-900">Tựa sách</dt>

                    <dd class="text-gray-800 sm:col-span-2">{{ book_title || "Không xác định" }}</dd>
                </div>

                <div class="grid grid-cols-2 p-2">
                    <dt class="font-bold text-gray-900">Ngày mượn</dt>

                    <dd class="text-gray-800 sm:col-span-2">{{ borrow.borrow_date ? new
                        Date( borrow.borrow_date ).toLocaleDateString( "vi-VN" ) : "Không xác định" }}</dd>
                </div>

                <div class="grid grid-cols-2 p-2">
                    <dt class="font-bold text-gray-900">Ngày trả</dt>

                    <dd class="text-gray-800 sm:col-span-2">{{ borrow.return_date ? new
                        Date( borrow.return_date ).toLocaleDateString( "vi-VN" ) : "Không xác định" }}</dd>
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
                    <div class="grid grid-cols-1">
                        <button @click=" goToEditBorrow( borrow._id )"
                            class="btn btn-ghost text-base hover:underline hover:btn-info hover:text-white">Chỉnh
                            sửa</button>
                    </div>
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