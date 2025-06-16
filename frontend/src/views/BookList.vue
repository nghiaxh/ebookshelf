<script setup>
import BookCard from "../components/BookCard.vue";
</script>

<template>
  <div class="mx-8">
    <h1 class="text-4xl font-bold m-8">Nổi bật</h1>
    <div class="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-8 lg:m-8">
      <article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg h-32 hover:scale-[1.05]">
        <img alt=""
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          class="w-full object-cover" />
      </article>
      <article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg h-32 hover:scale-[1.05]">
        <img alt=""
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          class="w-full object-cover" />
      </article>
      <article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg h-32 hover:scale-[1.05]">
        <img alt=""
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          class="w-full object-cover" />
      </article>
      <article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg h-32 hover:scale-[1.05]">
        <img alt=""
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          class="w-full object-cover" />
      </article>
    </div>
    <h2 class="text-2xl font-bold m-8">Gợi ý cho bạn</h2>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 lg:m-8">
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
    </div>
    <h2 class="text-2xl font-bold m-8">Đã đọc gần đây</h2>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 lg:m-8">
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
    </div>
  </div>
</template>