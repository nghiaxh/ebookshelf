<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import InputSearch from '../components/InputSearch.vue';
import StaffCard from '../components/StaffCard.vue';

import { ref, computed, onMounted } from "vue";
import StaffService from '../services/staff.service';
import { useRouter } from 'vue-router';
import { push } from 'notivue';

const staffService = new StaffService();
const router = useRouter();
const staffs = ref([]);
const searchText = ref("");
const role = computed(() => localStorage.getItem("role"));
const staff_id = computed(() => localStorage.getItem("id"));

const fetchStaffs = async () => {
  try {
    const response = await staffService.getAllStaffs();
    // debug code later
    // console.log(response);
    staffs.value = response.filter(staff => staff._id !== staff_id.value);
  } catch (error) {
    console.error(error);
    push.error("Đã có lỗi xảy ra khi hiện thị danh sách nhân viên");
  }
};

const searchFilteredStaff = computed(() => {
  if (!searchText.value) return staffs.value;

  const keyword = searchText.value.toLowerCase();

  return staffs.value.filter(staff => {
    const searchableText = [staff.name, staff.username, staff.address, staff.phone].filter(Boolean).join(' ').toLowerCase();
    return searchableText.includes(keyword);
  });
});

const goToAddStaff = () => {
  router.push({ name: "staff.add" });
};

const handleDeleteAllStaffs = async () => {
  try {
    if (confirm("Xác nhận xóa tất cả nhân viên?")) {
      const staffToDelete = staffs.value.filter(staff => staff._id !== staff_id);
      console.log(staffToDelete);
      // await staffService.deleteAllStaffs();
      push.info("Xóa tất cả nhân viên thành công");
      fetchStaffs();
    }
  } catch (error) {
    console.log(error);
    push.error("Đã xảy ra lỗi khi xóa tất cả nhân viên");
  }
};

onMounted(async () => {
  fetchStaffs();
});
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <Header></Header>
    <div class="flex-grow mx-16 sm:mx-24 lg:mx-32 my-8">
      <div class="grid grid-cols-1 place-items-center">
        <template v-if=" role === 'staff' ">
          <div class="flex flex-col gap-4 sm:flex-row place-items-center mb-8">
            <div class="tooltip" data-tip="Họ và tên, địa chỉ, số điện thoại, tên đăng nhập">
              <InputSearch v-model=" searchText "></InputSearch>
            </div>
            <button class="btn btn-neutral hover:btn-info hover:text-white hover:scale-[1.01]"
              @click=" goToAddStaff ">Thêm nhân viên</button>
          </div>
        </template>
      </div>
      <template v-if=" searchFilteredStaff.length > 0 ">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          <StaffCard v-for=" staff in searchFilteredStaff " :key=" staff._id " :staff=" staff "></StaffCard>
        </div>
      </template>
      <template v-else>
        <div class="grid grid-cols-1 text-center">
          <p class="py-6">Lỗi không thể tìm thấy nhân viên</p>
        </div>
      </template>
    </div>
    <Footer></Footer>
  </div>
</template>