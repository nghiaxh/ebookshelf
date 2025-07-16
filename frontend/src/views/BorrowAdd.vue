<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import BookService from '../services/book.service';

const bookService = new BookService();
const route = useRoute();

const book_id = route.params.id;
const book = ref({});

onMounted(async () => {
  try {
    const book_data = await bookService.getBook(book_id);
    book.value = book_data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header></Header>
    <div class="flex flex-grow justify-center items-center">
      <form @submit.prevent class="mb-24">
        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
          <legend class="fieldset-legend text-xl">Thêm phiếu mượn</legend>

          <label class="label">Tên sách</label>
          <input type="text" class="input" readonly :value="book.title" />

          <label class="label">Ngày trả</label>
          <input type="date" class="input" />

          <label class="label">Số lượng</label>
          <input type="number" class="input" readonly value="1" />

          <button class="btn btn-neutral mt-4 hover:scale-[1.01] text-base">Thêm phiếu mượn</button>

          <span class="mt-8">
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