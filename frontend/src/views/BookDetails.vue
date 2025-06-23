<script setup>
import Modal from '../components/Modal.vue';
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

      <li class="rtl:rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd" />
        </svg>
      </li>

      <li>
        <RouterLink to="/bookdetails" class="hover:underline"> Chi tiết sách </RouterLink>
      </li>
    </ol>
  </nav>

  <section>
    <div class="lg:grid lg:h-screen lg:place-content-center -mt-16">
      <div
        class="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">

        <div class="mt-8 mb-8 mr-8 shadow-xl">
          <img src="/books/471698887_10162694206219085_8219443336668216655_n.jpg"
            class="rounded-box shadow hover:shadow-2xl hover:scale-[1.01] transition h-full w-full" alt="" />
        </div>

        <div class="flow-root">
          <dl class="-my-3 divide-y divide-gray-200 rounded border border-gray-200 text-sm *:even:bg-gray-50">

            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-bold text-black text-xl">Thông tin chi tiết</dt>
            </div>

            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-medium text-gray-900">Tiêu đề sách</dt>

              <dd class="text-gray-700 sm:col-span-2">ABCD</dd>
            </div>

            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-medium text-gray-900">Tác giả</dt>

              <dd class="text-gray-700 sm:col-span-2">ABC</dd>
            </div>

            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-medium text-gray-900">Năm xuất bản</dt>

              <dd class="text-gray-700 sm:col-span-2">2025</dd>
            </div>

            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-medium text-gray-900">Đơn giá</dt>

              <dd class="text-gray-700 sm:col-span-2">997.000 VNĐ</dd>
            </div>

            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-medium text-gray-900">Bio</dt>

              <dd class="text-gray-700 sm:col-span-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                aspernatur neque molestiae labore aliquam soluta architecto?
              </dd>
            </div>

            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <button class="btn btn-neutral hover:scale-[1.01]" onclick="my_modal_1.showModal()">Mượn sách</button>
              <Modal />
            </div>

          </dl>
        </div>

      </div>
    </div>
  </section>
</template>