<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import InputSearch from "../components/InputSearch.vue";
import BorrowCard from "../components/BorrowCard.vue";

import { useRouter } from "vue-router";
import { ref, computed, onMounted } from 'vue';
import BorrowService from "../services/borrow.service";

const router = useRouter();
const borrowService = new BorrowService();
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

onMounted(async () => {
    fetchBorrows();
});
</script>

<template>
    <div class="flex flex-col min-h-screen overflow-hidden">
        <Header></Header>
        <div class="flex-grow mx-16 my-8">
            <div class="grid grid-cols-1 gap-4 place-items-center">
                <!-- TODO create composable useUserList -->
                <div class="tooltip" data-tip="Tìm kiếm đơn mượn sách theo ngày mượn, ngày trả">
                    <InputSearch v-model=" searchText "></InputSearch>
                </div>
                <template v-if=" role === 'staff' ">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8">
                        <button class="btn btn-neutral">Thêm người dùng</button>
                        <button class="btn btn-neutral">Xóa tất người dùng</button>
                    </div>
                </template>
                <template v-else>
                    <div class="mt-4"></div>
                </template>
            </div>
            <template v-if=" searchFilteredBorrows.length > 0 ">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                    <BorrowCard v-for=" borrow in searchFilteredBorrows " :key=" borrow._id " :borrow=" borrow "
                        @fetchBorrows=" fetchBorrows ">
                    </BorrowCard>
                </div>
            </template>
            <template v-else>
                <div class="grid grid-cols-1 text-center">
                    <p class="py-6">Lỗi không thể tìm thấy đơn mượn sách</p>
                </div>
            </template>
        </div>
        <Footer></Footer>
    </div>
</template>