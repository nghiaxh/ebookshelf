<script setup>
import { useStaffInfo } from '../composables/useStaffInfo';

const { role: staff_role } = useStaffInfo();

const props = defineProps({
  book: {
    type: Object,
    required: true
  }
});

// TODO create borrow book function
const handleBorrowBook = () => {

  if (confirm("Xác nhận mượn quyển sách")) {
    return;
  }
};

</script>

<template>
  <div class="flex flex-wrap flex-col shadow rounded-lg overflow-hidden hover:shadow-xl hover:scale-[1.01] transition">

    <img alt="Book cover" :src=" `https://placehold.co/400x400/black/white?text=${ book.title }` "
      class="shadow-md h-64 object-cover" />

    <div class="flow-root">
      <dl class="divide-y divide-gray-200 rounded border border-gray-200 text-sm">
        <div class="grid grid-cols-1 p-1.5 sm:grid-cols-3">
          <dt class="font-bold text-gray-900">Tựa sách</dt>

          <dd class="text-gray-800 sm:col-span-2">{{ book.title }}</dd>
        </div>

        <div class="grid grid-cols-1 p-1.5 sm:grid-cols-3">
          <dt class="font-bold text-gray-900">Tác giả</dt>

          <dd class="text-gray-800 sm:col-span-2">{{ book.author }}</dd>
        </div>

        <div class="grid grid-cols-1 p-1.5 sm:grid-cols-3">
          <dt class="font-bold text-gray-900">Năm xuất bản</dt>

          <dd class="text-gray-800 sm:col-span-2">{{ book.published_year }}</dd>
        </div>

        <div class="grid grid-cols-1 p-1.5 sm:grid-cols-3">
          <dt class="font-bold text-gray-900">Thể loại</dt>

          <dd class="text-gray-800 sm:col-span-2">{{ book.genre }}</dd>
        </div>

        <div class="grid grid-cols-1 p-1.5 sm:grid-cols-3">
          <dt class="font-bold text-gray-900">Đơn giá</dt>

          <dd class="text-gray-800 sm:col-span-2">{{ book.price }}</dd>
        </div>

        <div class="grid grid-cols-1 p-1.5 sm:grid-cols-3">
          <dt class="font-bold text-gray-900">Số lượng</dt>

          <dd class="text-gray-800 sm:col-span-2">{{ book.quantity }}</dd>
        </div>

        <template v-if=" staff_role === 'staff' ">
          <div class="grid grid-cols-1 xl:grid-cols-2">
            <button @click=" handleEditBook "
              class="btn btn-ghost text-base hover:underline hover:btn-success hover:text-white">Chỉnh sửa</button>
            <button @click=" handleDeleteBook "
              class="btn btn-ghost text-base hover:underline hover:btn-error hover:text-white">Xóa</button>
          </div>
        </template>

        <template v-else>
          <div class="grid grid-cols-1 tooltip" data-tip="Ấn vào đây để mượn sách">
            <button @click=" handleBorrowBook "
              class="btn btn-ghost text-base hover:underline hover:btn-info hover:text-white font-black">Mượn
              sách</button>
          </div>
        </template>
      </dl>
    </div>

  </div>
</template>