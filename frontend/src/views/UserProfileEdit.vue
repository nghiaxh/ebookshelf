<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header></Header>
    <div class="flex justify-center items-center flex-grow">
      <form @submit.prevent class="mb-24">
        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
          <legend class="fieldset-legend text-xl">Chỉnh sửa thông tin cá nhân</legend>
          <label class="label">Họ đệm</label>
          <input type="text" class="input" placeholder="Nhập họ đệm" />
          <label class="label">Tên</label>
          <input type="text" class="input" placeholder="Nhập tên" />
          <label class="label">Ngày sinh</label>
          <input type="date" class="input" />
          <label class="label">Giới tính</label>
          <div class="flex">
            <div class="mr-8">
              <input type="radio" name="radio-1" class="radio" /> <span>Nam</span>
            </div>
            <div>
              <input type="radio" name="radio-1" class="radio" /> <span>Nữ</span>
            </div>
          </div>
          <label class="label">Số điện thoại</label>
          <input type="text" minlength="10" maxlength="10" class="input" placeholder="Nhập số điện thoại" />
          <label class="label">Mật khẩu</label>
          <input type="password" minlength="6" maxlength="18" class="input" placeholder="Nhập mật khẩu" />
          <button class="btn btn-neutral mt-4 hover:scale-[1.01] text-base">Lưu thay đổi</button>
          <span class="mt-8">
            <strong class="hover:underline">
              <RouterLink to="/userprofile" class="text-base">Quay lại</RouterLink>
            </strong>
          </span>
        </fieldset>
      </form>
    </div>
    <Footer></Footer>
  </div>
</template>