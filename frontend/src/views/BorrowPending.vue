<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import InputSearch from "../components/InputSearch.vue";
import BorrowCard from "../components/BorrowCard.vue";

import { useRouter } from "vue-router";
import { ref, computed, onMounted } from 'vue';
import BorrowService from "../services/borrow.service";
import BookService from "../services/book.service";
import { push } from "notivue";

const router = useRouter();
const borrowService = new BorrowService();
const bookService = new BookService();
const role = computed(() => localStorage.getItem("role"));

const borrows = ref([]);
const searchText = ref("");
const filteredStatus = ref("");

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

const handleFilterStatus = (status) => {
    filteredStatus.value = status;
};

const filteredBorrows = computed(() => {
    let result = borrows.value
    
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

const handleApproveAllBorrows = async () => {
    try {
        const pendingBorrows = borrows.value.filter(borrow => borrow.status === "pending");
        const return_pendingBorrows = borrows.value.filter(borrow => borrow.status === "return_pending");
        for (const borrow of pendingBorrows) {
            if (borrow.book_id?.quantity > 0) {
                await borrowService.updateBorrow(borrow._id, { status: "borrowing" });
                await bookService.updateBook(borrow.book_id?._id, { quantity: borrow.book_id?.quantity - 1 });
            } else {
                push.error("Không thể duyệt tất cả sách do có sách đã hết");
                return;
            }
        }
        for (const borrow of return_pendingBorrows) {
            if (borrow.book_id?.quantity > 0) {
                await borrowService.updateBorrow(borrow._id, { status: "returned" });
                await bookService.updateBook(borrow.book_id?._id, { quantity: borrow.book_id?.quantity + 1 });
            } else {
                push.error("Không thể duyệt tất cả sách do có sách đã hết");
                return;
            }
        }
        push.success("Đã duyệt tất cả các đơn mượn chưa được duyệt");
        fetchBorrows();
    } catch (error) {
        console.log(error);
        push.error("Đã có lỗi trong quá trình duyệt tất cả các đơn mượn");
    }
};

onMounted(async () => {
    fetchBorrows();
});
</script>

<template>

    <div class="flex flex-col min-h-screen overflow-hidden">

        <Header></Header>

        <div class="flex-grow mx-16 sm:mx-24 lg:mx-32 my-8">
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8">
                <!-- filter books -->
                <div class="grid grid-cols-1 gap-4 place-items-center">

                    <div class="tooltip" data-tip="YYYY-MM-DD (năm-tháng-ngày)">
                        <InputSearch class="w-full" v-model=" searchText "></InputSearch>
                    </div>

                    <template v-if=" role === 'staff' ">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="dropdown dropdown-center">
                                <div tabindex="0" role="button" class="btn bg-base-100 hover:bg-base-300">Trạng thái đơn mượn</div>
                                <ul tabindex="0"
                                    class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a @click="handleFilterStatus( '' )">Tất cả</a></li>
                                    <li><a @click="handleFilterStatus( 'pending' )">Chờ duyệt</a></li>
                                    <li><a @click="handleFilterStatus( 'borrowing' )">Đang mượn</a></li>
                                    <li><a @click="handleFilterStatus( 'return_pending' )">Chờ duyệt trả</a></li>
                                    <li><a @click="handleFilterStatus( 'returned' )">Đã trả</a></li>
                                    <li><a @click="handleFilterStatus( 'rejected' )">Từ chối</a></li>
                                </ul>
                            </div>

                            <button class="btn btn-neutral hover:btn-success hover:text-white hover:scale-[1.01]"
                                @click=" handleApproveAllBorrows ">Duyệt
                                tất cả</button>
                        </div>
                    </template>
                </div>

                <!-- list books -->

                <template v-if=" filteredBorrows.length > 0 ">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                        <BorrowCard v-for=" borrow in filteredBorrows " :key=" borrow._id " :borrow=" borrow "
                            @fetchBorrows=" fetchBorrows ">
                        </BorrowCard>
                    </div>
                </template>

                <template v-else>
                    <div class="grid grid-cols-1 text-center">
                        <p class="py-6 font-bold">Hiện tại không có đơn mượn sách cần duyệt</p>
                    </div>
                </template>
            </div>

        </div>

        <Footer></Footer>

    </div>
</template>