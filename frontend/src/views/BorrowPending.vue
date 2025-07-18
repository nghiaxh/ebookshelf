<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import InputSearch from "../components/InputSearch.vue";
import BorrowCard from "../components/BorrowCard.vue";

import { useRouter } from "vue-router";
import { ref, computed, onMounted } from 'vue';
import BorrowService from "../services/borrow.service";
import BookService from "../services/book.service";

const router = useRouter();
const borrowService = new BorrowService();
const bookService = new BookService();
const role = computed(() => localStorage.getItem("role"));

const borrows = ref([]);
const searchText = ref("");

const fetchBorrows = async () => {
    try {
        const response = await borrowService.getAllBorrows();
        // debug code later
        // console.log(response);
        borrows.value = response;
    } catch (error) {
        console.error(error);
    }
};

const searchFilteredBorrows = computed(() => {
    if (!searchText.value) return borrows.value;

    const keyword = searchText.value.toLowerCase();

    return borrows.value.filter(borrow => {
        const searchableText = [borrow.borrow_date, borrow.return_date, borrow.status]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();

        return searchableText.includes(keyword);
    });
});

const handleApproveAllBooks = async () => {
    try {
        const pendingBooks = borrows.value.filter(borrow => borrow.status === "pending");
        for (const borrow of pendingBooks) {
            const book_data = await bookService.getBook(borrow.book_id);
            if (book_data.quantity > 0) {
                await borrowService.updateBorrow(borrow._id, { status: "approved" });
                await bookService.updateBook(borrow.book_id, { quantity: book_data.quantity - 1 });
            }
        }
        alert("Đã duyệt tất cả các đơn mượn đang chờ duyệt");
        fetchBorrows();
    } catch (error) {
        console.log(error);
        alert("Đã có lỗi trong quá trình duyệt tất cả các đơn mượn");
    }
};

onMounted(async () => {
    fetchBorrows();
});
</script>

<template>

    <div class="flex flex-col min-h-screen overflow-hidden">

        <Header></Header>

        <div class="flex-grow mx-16 my-8">
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8">
                <!-- filter books -->
                <div class="grid grid-cols-1 gap-4 place-items-center">

                    <div class="tooltip" data-tip="Tìm kiếm theo ngày mượn, ngày trả, trạng thái đơn mượn">
                        <InputSearch class="w-full" v-model=" searchText "></InputSearch>
                    </div>

                    <template v-if=" role === 'staff' ">
                        <div class="grid grid-cols-1 gap-4">
                            <button class="btn btn-neutral" @click=" handleApproveAllBooks ">Duyệt tất cả sách</button>
                        </div>
                    </template>
                </div>

                <!-- list books -->

                <template v-if=" searchFilteredBorrows.length > 0 ">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                        <BorrowCard v-for=" borrow in searchFilteredBorrows " :key=" borrow._id " :borrow=" borrow " @fetchBorrows="fetchBorrows">
                        </BorrowCard>
                    </div>
                </template>

                <template v-else>
                    <div class="grid grid-cols-1 text-center">
                        <h1 class="text-5xl font-bold">Oops</h1>
                        <p class="py-6">Lỗi không thể tìm đơn mượn sách cần duyệt</p>
                    </div>
                </template>
            </div>

        </div>

        <Footer></Footer>

    </div>
</template>