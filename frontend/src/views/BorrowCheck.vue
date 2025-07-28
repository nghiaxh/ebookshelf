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
const id = computed(() => localStorage.getItem("id"));

const borrows = ref([]);
const searchText = ref("");
const filteredStatus = ref("");

const fetchBorrows = async (borrow_id) => {
    try {
        const response = await borrowService.getAllBorrows();
        // debug code later
        // console.log(response);
        borrows.value = response.filter(borrow => borrow.user_id?._id === id.value);
    } catch (error) {
        console.error(error);
    }
};

const handleFilterStatus = (status) => {
    filteredStatus.value = status;
};

const filteredBorrows = computed(() => {
    let result = borrows.value;

    if (filteredStatus.value) {
        return result.filter(borrow => borrow.status === filteredStatus.value);
    }

    if (searchText.value) {

        const keyword = searchText.value.toLowerCase();

        return borrows.value.filter(borrow => {
            const searchableText = [borrow.borrow_date, borrow.return_date, borrow.status]
                .filter(Boolean)
                .join(' ')
                .toLowerCase();

            return searchableText.includes(keyword);
        });
    }

    return borrows.value;
});

onMounted(async () => {
    fetchBorrows();
});
</script>

<template>
    <div class="flex flex-col min-h-screen overflow-hidden">
        <Header></Header>
        <div class="flex-grow mx-16 sm:mx-24 lg:mx-32 my-8">
            <div class="grid grid-cols-1 gap-4 place-items-center">

                <div class="tooltip" data-tip="Tìm kiếm đơn mượn sách theo ngày mượn, ngày trả">
                    <InputSearch v-model=" searchText "></InputSearch>
                </div>

                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="dropdown dropdown-center">
                        <div tabindex="0" role="button" class="btn bg-base-100 hover:bg-base-300">Trạng thái đơn mượn
                        </div>
                        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a @click="handleFilterStatus( '' )">Tất cả</a></li>
                            <li><a @click="handleFilterStatus( 'pending' )">Chờ duyệt</a></li>
                            <li><a @click="handleFilterStatus( 'borrowing' )">Đang mượn</a></li>
                            <li><a @click="handleFilterStatus( 'return_pending' )">Chờ duyệt trả</a></li>
                            <li><a @click="handleFilterStatus( 'returned' )">Đã trả</a></li>
                            <li><a @click="handleFilterStatus( 'rejected' )">Từ chối</a></li>
                        </ul>
                    </div>
                    <button class="btn btn-neutral hover:scale-[1.01]">Làm mới</button>
                </div>

            </div>
            <template v-if=" filteredBorrows.length > 0 ">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                    <BorrowCard v-for=" borrow in filteredBorrows " :key=" borrow._id " :borrow=" borrow "
                        @fetchBorrows=" fetchBorrows ">
                    </BorrowCard>
                </div>
            </template>
            <template v-else>
                <div class="grid grid-cols-1 text-center">
                    <p class="py-6 font-bold">Hiện tại chưa có đơn mượn sách</p>
                </div>
            </template>
        </div>
        <Footer></Footer>
    </div>
</template>