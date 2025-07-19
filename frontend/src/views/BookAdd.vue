<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import PublisherService from '../services/publisher.service';
import BookService from "../services/book.service";
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const bookService = new BookService();
const publisherService = new PublisherService();
const router = useRouter();

const book_title = ref("");
const book_author = ref("");
const book_price = ref(undefined);
const book_published_year = ref(undefined);
const book_quantity = ref(undefined);
const book_publisher_name = ref("");

const publishers = ref([]);

const fetchPublishers = async () => {
  try {
    const publishers_data = await publisherService.getAllPublishers();
    publishers.value = publishers_data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  fetchPublishers();
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header></Header>
    <div class="flex flex-grow justify-center items-center">
      <form @submit.prevent>
        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
          <legend class="fieldset-legend text-xl">Thêm mới sách</legend>
          <label class="label">Tựa sách</label>
          <input v-model=" book_title " type="text" class="input" placeholder="Nhập tựa sách" />

          <label class="label">Tác giả</label>
          <input v-model=" book_author " type="text" class="input" placeholder="Nhập tác giả" />

          <label class="label">Nhà xuất bản</label>
          <select v-model=" book_publisher_name " class="select">
            <option disabled value="">Chọn nhà xuất bản</option>
            <option v-for=" publisher in publishers " :key=" publisher._id " :value=" publisher.name ">
              {{ publisher.name }}
            </option>
          </select>

          <label class="label">Đơn giá</label>
          <input v-model=" book_price " type="number" class="input" placeholder="Nhập đơn giá" />

          <label class="label">Số lượng</label>
          <input v-model=" book_quantity " type="number" class="input" placeholder="Nhập số lượng" />

          <button class="btn btn-neutral mt-4 hover:scale-[1.01] text-base">Cập nhật</button>

          <span class="mt-4">
            <strong class="hover:underline">
              <RouterLink to="/books" class="text-base">Quay lại</RouterLink>
            </strong>
          </span>
        </fieldset>
      </form>
    </div>
    <Footer></Footer>
  </div>
</template>