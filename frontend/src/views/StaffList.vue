<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import InputSearch from '../components/InputSearch.vue';

import { useStaffInfo } from '../composables/useStaffInfo';

const { role: staff_role } = useStaffInfo();

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header></Header>
    <div class="flex-grow gap-8 grid place-items-center grid-cols-1 grid-rows-3">
      <div class="grid grid-cols-1 gap-4 place-items-center">

        <!-- TODO create composable useStaffList -->
        <InputSearch></InputSearch>

        <template v-if=" staff_role === 'staff' ">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <button class="btn btn-neutral">Thêm nhân viên</button>
            <button class="btn btn-neutral">Xóa tất nhân viên</button>
          </div>
        </template>
      </div>
      <div class="">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr class="bg-base-200">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <!-- row 2 -->
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <!-- row 3 -->
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>