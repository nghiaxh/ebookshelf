<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import BookService from '../services/book.service';
import BorrowService from '../services/borrow.service';
import PublisherService from '../services/publisher.service';
import { push } from 'notivue';
import { useForm, useField } from "vee-validate";
import { borrowSchema } from '../validations/borrow.validation';

const bookService = new BookService();
const borrowService = new BorrowService();
const publisherService = new PublisherService();

const route = useRoute();
const router = useRouter();

const user_id = computed(() => localStorage.getItem("id"));
const book_id = route.params.id;
const book = ref([]);
// const publisher_name = ref("");

const quantity = ref(1);
const { handleSubmit, meta } = useForm({
  validationSchema: borrowSchema,
});

const { value: return_date, errorMessage: return_dateError } = useField("return_date");

const handleCreateBorrow = async () => {
  // debug code
  // console.log(return_date.value);

  if (!meta.value.valid) {
    push.error('Vui lòng kiểm tra lại thông tin');
    return;
  }
  try {
    const data = {
      user_id: user_id.value,
      book_id: book_id,
      return_date: return_date.value,
      quantity: quantity.value
    };

    await borrowService.createBorrow(data);
    push.success("Tạo đơn mượn sách thành công");
    router.push("/books");

  } catch (error) {
    console.log(error);
    push.error("Không thể mượn sách do số lượng sách đã hết");
  }
};


onMounted(async () => {
  try {
    const book_data = await bookService.getBook(book_id);
    book.value = book_data;
    // const publisher_data = await publisherService.getPublisherById(book_data.publisher_id);
    // publisher_name.value = publisher_data.name;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header></Header>
    <div class="flex flex-grow justify-center items-center">
      <form @submit.prevent=" handleCreateBorrow ">
        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
          <legend class="fieldset-legend text-xl">Thêm đơn mượn sách</legend>

          <label class="label">Tựa sách</label>
          <input type="text" class="input" readonly :value=" book.title " />

          <label class="label">Tác giả</label>
          <input type="text" class="input" readonly :value=" book.author ">

          <label class="label">Đơn giá</label>
          <input type="number" class="input" readonly :value=" book.price ">

          <label class="label">Năm xuất bản</label>
          <input type="text" class="input" readonly :value=" book.published_year ">

          <label class="label">Tên nhà xuất bản</label>
          <input type="text" class="input" readonly :value=" book.publisher_id?.name ">

          <label class="label">Số lượng</label>
          <input v-model=" quantity " type="number" class="input" readonly value="1" />

          <label class="label" for="return_date">Ngày trả sách</label>
          <input v-model=" return_date " type="date" class="input" id="return_date" />
          <span class="text-red-600 text-sm">{{ return_dateError }}</span>

          <button type="submit" class="btn btn-neutral mt-4 hover:scale-[1.01] text-base">Thêm phiếu mượn</button>

          <span class="mt-8">
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