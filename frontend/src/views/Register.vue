<template>
  <div class="flex justify-center items-center h-screen">
    <form @submit.prevent class="mb-24">
      <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 lg:text-base">
        <legend class="fieldset-legend text-xl">Đăng Ký</legend>

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
        <button class="btn btn-neutral mt-4 text-base hover:scale-[1.005] lg:text-base">Đăng Ký</button>

        <span class="mt-8">Bạn đã có tài khoản? <strong class="hover:underline">
            <RouterLink to="/login" class="lg:text-base">Đăng nhập</RouterLink>
          </strong></span>
      </fieldset>
    </form>
  </div>
</template>