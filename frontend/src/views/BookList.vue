<script setup>
import BookCard from "../components/BookCard.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import InputSearch from "../components/InputSearch.vue";

import { useBookList } from "../composables/useBookList";
import { useStaffInfo } from "../composables/useStaffInfo";

const { role: staff_role } = useStaffInfo();
const { searchText, searchFilteredBooks } = useBookList();

</script>

<template>

  <div class="flex flex-col min-h-screen">

    <Header></Header>

    <div class="flex-grow mx-8 my-8">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-2">
        <!-- filter books -->
        <div class="grid grid-cols-1 gap-4 place-items-center">
          <InputSearch v-model=" searchText "></InputSearch>

          <template v-if=" staff_role === 'staff' ">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button class="btn btn-neutral">Thêm sách</button>
              <button class="btn btn-neutral">Thêm nhà xuất bản</button>
              <button class="btn btn-neutral">Xóa tất cả sách</button>
            </div>
          </template>
        </div>
        <!-- list books -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-4">
          <BookCard v-for=" book in searchFilteredBooks " :key=" book.book_id " :book=" book "></BookCard>
        </div>

      </div>
    </div>

    <Footer></Footer>

  </div>
</template>