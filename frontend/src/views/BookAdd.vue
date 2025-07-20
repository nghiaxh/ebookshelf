<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import PublisherService from '../services/publisher.service';
import BookService from "../services/book.service";
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { push } from 'notivue';
import { useForm, useField } from "vee-validate";
import { bookSchema } from '../validations/bookValidation';

const bookService = new BookService();
const publisherService = new PublisherService();
const router = useRouter();

const { handleSubmit, meta } = useForm({
  validationSchema: bookSchema,
  initialValues: {
    title: "",
    author: "",
    price: undefined,
    published_year: undefined,
    quantity: undefined,
    publisher_id: "",
  }
});

const { value: title, errorMessage: titleError } = useField("title");
const { value: author, errorMessage: authorError } = useField("author");
const { value: price, errorMessage: priceError } = useField("price");
const { value: published_year, errorMessage: published_yearError } = useField("published_year");
const { value: publisher_id, errorMessage: publisher_idError } = useField("publisher_id");
const { value: quantity, errorMessage: quantityError } = useField("quantity");

const publishers = ref([]);

const fetchPublishers = async () => {
  try {
    const publishers_data = await publisherService.getAllPublishers();
    publishers.value = publishers_data;
  } catch (error) {
    console.log(error);
  }
};

const handleCreateBook = async () => {
  try {
    const data = {
      title: title.value,
      author: author.value,
      price: price.value,
      published_year: published_year.value,
      publisher_id: publisher_id.value,
      quantity: quantity.value
    };
    await bookService.createBook(data);

    push.success("Thêm sách thành công");
    router.push("/books");
  } catch (error) {
    console.log(error);
    push.error("Đã xảy ra lỗi khi thêm sách");
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
      <form @submit.prevent=" handleCreateBook ">
        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
          <legend class="fieldset-legend text-xl">Thêm mới sách</legend>
          <label class="label">Tựa sách</label>
          <input v-model=" title " type="text" class="input" placeholder="Nhập tựa sách" />
          <span class="text-sm text-red-600">{{ titleError }}</span>

          <label class="label">Tác giả</label>
          <input v-model=" author " type="text" class="input" placeholder="Nhập tác giả" />
          <span class="text-sm text-red-600">{{ authorError }}</span>

          <label class="label">Nhà xuất bản</label>
          <select v-model=" publisher_id " class="select">
            <option disabled value="">Chọn nhà xuất bản</option>
            <option v-for=" publisher in publishers " :key=" publisher._id " :value=" publisher._id ">
              {{ publisher.name }}
            </option>
          </select>
          <span class="text-sm text-red-600">{{ publisher_idError }}</span>

          <label class="label">Năm xuất bản</label>
          <input v-model=" published_year " type="number" class="input" placeholder="Nhập năm xuất bản" />
          <span class="text-sm text-red-600">{{ published_yearError }}</span>

          <label class="label">Đơn giá</label>
          <input v-model=" price " type="number" class="input" placeholder="Nhập đơn giá" />
          <span class="text-sm text-red-600">{{ priceError }}</span>

          <label class="label">Số lượng</label>
          <input v-model=" quantity " type="number" class="input" placeholder="Nhập số lượng" />

          <span class="text-sm text-red-600">{{ quantityError }}</span>
          <button class="btn btn-neutral mt-4 hover:scale-[1.01] text-base">Thêm sách</button>

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