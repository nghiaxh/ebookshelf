<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8 place-items-center h-[90vh]">
    <form @submit.prevent class="mb-24">
      <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 lg:text-base">
        <!-- User login -->
        <legend class="fieldset-legend text-xl ">Đăng Nhập</legend>

        <label class="label">Số điện thoại</label>
        <input type="text" minlength="10" maxlength="10" class="input" placeholder="Nhập số điện thoại" />

        <label class="label">Mật khẩu</label>
        <input type="password" minlength="6" maxlength="18" class="input" placeholder="Nhập mật khẩu" />

        <button class="btn btn-neutral mt-4 lg:text-base hover:scale-[1.01]">Đăng Nhập</button>

        <label class="label mt-4">Hoặc đăng nhập với</label>
        <!-- Admin login -->
        <button class="btn bg-white text-black border-[#e5e5e5] lg:text-base hover:scale-[1.01]">
          Đăng Nhập Nhân Viên
        </button>

        <span class="mt-8">Bạn chưa có tài khoản? <strong class="hover:underline">
            <RouterLink to="/register">Đăng ký</RouterLink>
          </strong></span>
      </fieldset>
    </form>
  </div>
</template>