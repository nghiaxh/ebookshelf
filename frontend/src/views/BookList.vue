<script setup>
import BookCard from "../components/BookCard.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import InputSearch from "../components/InputSearch.vue";
</script>

<template>

  <div class="h-screen">
    <Header></Header>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8 mx-8 my-8">
      <div class="grid place-items-center grid-rows-1 grid-cols-1">
        <InputSearch></InputSearch>
      </div>

      <!-- list books -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>

        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>

      </div>

    </div>
    <Footer></Footer>
  </div>

</template>