<template>
  <article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg h-128 hover:scale-[1.05]">
    <img alt=""
      src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      class="h-64 w-full object-cover" />

    <div class="bg-white p-4 sm:p-6">

      <RouterLink to="/bookdetails">
        <h3 class="mt-0.5 text-lg text-gray-900">Lorem ipsum dolor sit amet.</h3>
      </RouterLink>

      <time datetime="2022-10-10" class="block text-sm/relaxed text-gray-500 mt-4"> Năm xuất bản </time>

      <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">Đơn giá</p>
    </div>
  </article>
</template>