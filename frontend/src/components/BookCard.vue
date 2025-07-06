<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  book: {
    type: Object,
    required: true
  }
});

const checkBookDetails = (book_id) => {
  router.push({
    name: 'book.details',
    params: { id: book_id }
  });
};

</script>

<template>
  <div>
    <button @click="checkBookDetails( book.book_id )"
      class="block shadow rounded-lg overflow-hidden hover:shadow-xl hover:scale-[1.01] transition">

      <img alt="" :src=" book.image || 'https://placehold.co/400x300/black/white?text=Book+cover' "
        class="shadow w-full object-cover sm:h-80 lg:h-96" />

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

          <div class="grid grid-cols-1 p-1.5 sm:grid-cols-3">
            <dt class="font-bold text-gray-900">Mô tả</dt>

            <dd class="text-gray-800 sm:col-span-2">{{ book.description }}</dd>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-1">
            <button class="btn btn-neutral">Thêm sách</button>
          </div>
        </dl>
      </div>

    </button>
  </div>
</template>