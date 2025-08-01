<script setup>
import BookCard from "../components/BookCard.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import InputSearch from "../components/InputSearch.vue";

import { useRouter } from "vue-router";
import { ref, computed, onMounted } from 'vue';
import BookService from '../services/book.service';
import { push } from "notivue";

const router = useRouter();
const bookService = new BookService();
const role = computed(() => localStorage.getItem("role"));

const books = ref([]);
const searchText = ref("");

const fetchBooks = async () => {
  try {
    const response = await bookService.getAllBooks();
    // debug code later
    // console.log(response);
    books.value = response;
    books.value.sort(() => Math.random() - Math.random());
  } catch (error) {
    console.error(error);
    push.error("Đã có lỗi xảy ra khi hiện thị danh mục sách");
  }
};

const searchFilteredBooks = computed(() => {
  if (!searchText.value) return books.value;

  const keyword = searchText.value.toLowerCase();

  return books.value.filter(book => {
    const searchableText = [book.title, book.book_id, book.author, book.published_year, book.price, book.genre]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return searchableText.includes(keyword);
  });
});

const goToAddBook = () => {
  router.push({ name: "book.add" });
};

const handleDeleteAllBooks = async () => {
  try {
    if (confirm("Xác nhận xóa tất cả sách?")) {
      await bookService.deleteAllBooks();
      push.success("Xóa tất cả sách thành công");
      fetchBooks();
    }
  } catch (error) {
    console.log(error);
    push.error("Đã xảy ra lỗi khi xóa tất cả sách");
  }
};

onMounted(async () => {
  fetchBooks();
});
</script>

<template>

  <div class="flex flex-col min-h-screen overflow-hidden">

    <Header></Header>

    <div class="flex-grow mx-16 sm:mx-24 lg:mx-32 my-8">
      <div class="grid grid-cols-1 gap-4 lg:gap-8">
        <div class="grid grid-cols-1 gap-4 place-items-center">

          <div class="tooltip" data-tip="Tựa sách, tác giả, năm xuất bản, đơn giá">
            <InputSearch class="w-full" v-model=" searchText "></InputSearch>
          </div>

          <template v-if=" role === 'staff' ">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button class="btn btn-neutral hover:btn-info hover:text-white hover:scale-[1.01]"
                @click=" goToAddBook ">Thêm sách</button>
              <button class="btn btn-neutral hover:btn-error hover:text-white hover:scale-[1.01]"
                @click=" handleDeleteAllBooks ">Xóa tất cả</button>
            </div>
          </template>
        </div>

        <!-- list books -->

        <template v-if=" searchFilteredBooks.length > 0 ">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            <BookCard v-for=" book in searchFilteredBooks " :key=" book._id " :book=" book "></BookCard>
          </div>
        </template>

        <template v-else>
          <div class="grid grid-cols-1 text-center">
            <p class="py-6 font-bold">Hiện tại chưa tìm thấy sách</p>
          </div>
        </template>
      </div>

    </div>

    <Footer></Footer>

  </div>
</template>