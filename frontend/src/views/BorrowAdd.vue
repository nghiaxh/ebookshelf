<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import BookService from '../services/book.service';
import BorrowService from '../services/borrow.service';

const bookService = new BookService();
const borrowService = new BorrowService();
const route = useRoute();
const router = useRouter();

const user_id = computed(() => localStorage.getItem("id"));
const book_id = route.params.id;
const book = ref({});

const book_return_date = ref(undefined);
const book_quantity = ref(1);

const handleCreateBorrow = async () => {
  try {
    const data = {
      user_id: user_id.value,
      book_id: book_id,
      return_date: book_return_date.value,
      quantity: book_quantity.value
    };
    await borrowService.createBorrow(data);
    alert("Tạo đơn mượn sách thành công");
    router.push("/books");
  } catch (error) {
    console.log(error);
    alert("Đã xảy ra lỗi khi tạo đơn mượn sách");
  }
};

onMounted(async () => {
  try {
    const book_data = await bookService.getBook(book_id);
    book.value = book_data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header></Header>
    <div class="flex flex-grow justify-center items-center">
      <form @submit.prevent=" handleCreateBorrow()" class="mb-24">
        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
          <legend class="fieldset-legend text-xl">Thêm phiếu mượn</legend>

          <label class="label">Tựa sách</label>
          <input type="text" class="input" readonly :value=" book.title " />
          <!-- TODO form validation -->
          <label class="label">Ngày trả</label>
          <input v-model=" book_return_date " type="date" class="input" />

          <label class="label">Số lượng</label>
          <input v-model=" book_quantity " type="number" class="input" readonly value="1" />

          <button class="btn btn-neutral mt-4 hover:scale-[1.01] text-base">Thêm phiếu mượn</button>

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