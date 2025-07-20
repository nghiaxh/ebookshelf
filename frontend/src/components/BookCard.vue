<script setup>
import { useRouter } from "vue-router";
import { ref, computed, onMounted } from 'vue';
import PublisherService from "../services/publisher.service";

const role = computed(() => localStorage.getItem("role"));
const router = useRouter();
const publisherService = new PublisherService();

const props = defineProps({
  book: {
    type: Object,
    required: true
  }
});

const publisher_name = ref("");

const goToBorrowBook = (book_id) => {
  router.push({ name: "borrow.add", params: { id: book_id } });
};

const goToEditBook = (book_id) => {
  router.push({ name: "book.edit", params: { id: book_id } });
};

onMounted(async () => {
  try {
    const data = await publisherService.getPublisherById(props.book.publisher_id);
    publisher_name.value = data.name || "Không xác định";
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="flex flex-wrap flex-col shadow rounded-lg overflow-hidden hover:shadow-lg hover:scale-[1.001] transition">

    <!-- <img alt="Book cover" :src=" `https://picsum.photos/seed/${ book._id }/800` " class="shadow-md object-cover" /> -->

    <div class="flow-root">
      <dl class="divide-y divide-gray-200 rounded border border-gray-200 text-sm">
        <div class="grid grid-cols-2 p-2">
          <dt class="font-bold text-gray-900">Tựa sách</dt>

          <dd class="text-gray-800 sm:col-span-2">{{ book.title || "Không xác định" }}</dd>
        </div>

        <div class="grid grid-cols-2 p-2">
          <dt class="font-bold text-gray-900">Tác giả</dt>

          <dd class="text-gray-800 sm:col-span-2">{{ book.author || "Không xác định" }}</dd>
        </div>

        <div class="grid grid-cols-2 p-2">
          <dt class="font-bold text-gray-900">Năm xuất bản</dt>

          <dd class="text-gray-800 sm:col-span-2">{{ book.published_year || "Không xác định" }}</dd>
        </div>

        <!-- <div class="grid grid-cols-2 p-2">
          <dt class="font-bold text-gray-900">Mã nhà xuất bản</dt>

          <dd class="text-gray-800 sm:col-span-2">{{ book.publisher_id || "Không xác định" }}</dd>
        </div> -->

        <div class="grid grid-cols-2 p-2">
          <dt class="font-bold text-gray-900">Tên nhà xuất bản</dt>

          <dd class="text-gray-800 sm:col-span-2">{{ publisher_name || "Không xác định" }}</dd>
        </div>

        <div class="grid grid-cols-2 p-2">
          <dt class="font-bold text-gray-900">Đơn giá</dt>

          <dd class="text-gray-800 sm:col-span-2">{{ `${ book.price.toLocaleString() }đ` || "Không xác định" }}</dd>
        </div>

        <div class="grid grid-cols-2 p-2">
          <dt class="font-bold text-gray-900">Số lượng</dt>

          <template v-if=" book.quantity >= 50 ">
            <dd class="text-emerald-600 font-bold sm:col-span-2">{{ `Còn ${ book.quantity } quyển sách` }}</dd>
          </template>
          <template v-else-if=" book.quantity >= 25 ">
            <dd class="text-amber-600 font-bold sm:col-span-2">{{ `Còn ${ book.quantity } quyển sách` }}</dd>
          </template>
          <template v-else-if=" book.quantity >= 0 ">
            <dd class="text-red-600 font-bold sm:col-span-2">{{ `Còn ${ book.quantity } quyển sách` }}</dd>
          </template>
          <template v-else>
            <dd class="text-stone-600 font-bold sm:col-span-2">Không xác định</dd>
          </template>
        </div>

        <template v-if=" role === 'staff' ">
          <div class="grid grid-cols-1">
            <button @click=" goToEditBook( book._id )"
              class="btn btn-ghost text-base hover:underline hover:btn-info hover:text-white">Chỉnh sửa</button>
          </div>
        </template>

        <template v-else>
          <div class="grid grid-cols-1 tooltip" data-tip="Ấn vào đây để mượn sách">
            <button @click=" goToBorrowBook( book._id )"
              class="btn btn-ghost text-base hover:underline hover:btn-info hover:text-white font-bold">Mượn
              sách</button>
          </div>
        </template>
      </dl>
    </div>

  </div>
</template>