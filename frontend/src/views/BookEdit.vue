<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import BookService from '../services/book.service';
import PublisherService from '../services/publisher.service';

const bookService = new BookService();
const publisherService = new PublisherService();
const route = useRoute();
const book_id = route.params.id;
const book = ref({});
const publishers = ref([]);

const fetchPublishers = async () => {
    try {
        const publishers_data = await publisherService.getAllPublishers();
        publishers.value = publishers_data;
    } catch (error) {
        console.log(error);
    }
};


const fetchCurrentBook = async () => {
    try {
        const book_data = await bookService.getBook(book_id);
        book.value = book_data;
    } catch (error) {
        console.log(error);
    }
};

onMounted(async () => {
    fetchCurrentBook();
    fetchPublishers();
});
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <Header></Header>
        <div class="flex flex-grow justify-center items-center">
            <form @submit.prevent>
                <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
                    <legend class="fieldset-legend text-xl">Cập nhật sách</legend>
                    <label class="label">Tựa sách</label>
                    <input type="text" class="input" placeholder="Nhập tựa sách" />

                    <label class="label">Tác giả</label>
                    <input type="text" class="input" placeholder="Nhập tác giả" />

                    <label class="label">Nhà xuất bản</label>
                    <select class="select">
                        <option v-for=" publisher in publishers " :key=" publisher._id " :value=" publisher.name ">
                            {{ publisher.name }}
                        </option>
                    </select>

                    <label class="label">Đơn giá</label>
                    <input type="number" class="input" placeholder="Nhập đơn giá" />

                    <label class="label">Số lượng</label>
                    <input type="number" class="input" placeholder="Nhập số lượng" />

                    <div class="grid grid-cols-2 gap-2">
                        <button class="btn btn-neutral mt-4 hover:scale-[1.01] text-base">Cập nhật</button>
                        <button class="btn btn-neutral mt-4 hover:scale-[1.01] text-base">Xóa</button>
                    </div>

                    <span class="mt-4">
                        <strong class="hover:underline">
                            <RouterLink to="/books" class="text-base">Quay lại</RouterLink>
                        </strong>
                    </span>
                </fieldset>
            </form>
        </div>
        <Footer></Footer>
    </div>
</template>