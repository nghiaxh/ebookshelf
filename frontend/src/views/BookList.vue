<script setup>
import BookCard from "../components/BookCard.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import InputSearch from "../components/InputSearch.vue";
</script>

<template>

  <div class="flex flex-col min-h-screen">

    <Header></Header>
    
    <div class="flex-grow mx-16 my-8">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8">

        <!-- filter books -->
        <div class="grid place-items-center">
          <InputSearch></InputSearch>
        </div>
        <!-- list books -->
        <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
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
    </div>

    <Footer></Footer>
    
  </div>
</template>