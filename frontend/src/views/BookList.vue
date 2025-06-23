<script setup>
import BookCard from "../components/BookCard.vue";

</script>

<template>

  <nav aria-label="Breadcrumb">
    <ol class="flex items-center gap-2 text-md text-black m-8 justify-center">
      <li>
        <RouterLink to="/" class="hover:underline"> Trang chủ </RouterLink>
      </li>

      <li class="rtl:rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd" />
        </svg>
      </li>

      <li>
        <RouterLink to="/books" class="hover:underline"> Danh mục sách </RouterLink>
      </li>
    </ol>
  </nav>

  <div class="mx-8">
    <h1 class="text-4xl font-bold m-8">Nổi bật</h1>
    <div class="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-8 lg:m-8">
      <article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg hover:scale-[1.01]">
        <img alt="" src="/books/471494296_10162694629299085_6671133457534589034_n.jpg" class="w-full object-cover" />
      </article>
      <article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg hover:scale-[1.01]">
        <img alt="" src="/books/471576057_10162694462954085_1224943961362147689_n.jpg" class="w-full object-cover" />
      </article>
      <article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg hover:scale-[1.01]">
        <img alt="" src="/books/471620609_10162694480929085_292159387103542639_n.jpg" class="w-full object-cover" />
      </article>
      <article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg hover:scale-[1.01]">
        <img alt="" src="/books/471853141_10162694517889085_4050105653098072654_n.jpg" class="w-full object-cover" />
      </article>
    </div>
    <h2 class="text-2xl font-bold m-8">Gợi ý cho bạn</h2>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 lg:m-8">

      <RouterLink to="/bookdetails" class="block shadow rounded-lg overflow-hidden ">
        <img alt="" src="/books/471308790_10162694218909085_1725891159758126552_n.jpg"
          class="w-full object-cover sm:h-80 lg:h-96" />

        <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Lorem, ipsum dolor.</h3>

        <p class="my-8 max-w-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.
        </p>
      </RouterLink>

    </div>

    <h2 class="text-2xl font-bold m-8">Đã đọc gần đây</h2>

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 lg:m-8">

      <RouterLink to="/bookdetails" class="block shadow rounded-lg overflow-hidden ">
        <img alt="" src="/books/471579562_10162694480279085_5618863864055374268_n.jpg"
          class="w-full object-cover sm:h-80 lg:h-96" />

        <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Lorem, ipsum dolor.</h3>

        <p class="my-8 max-w-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.
        </p>
      </RouterLink>

    </div>
  </div>
</template>