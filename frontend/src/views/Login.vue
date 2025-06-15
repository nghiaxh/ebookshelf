<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8 place-items-center h-screen">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
      <legend class="fieldset-legend text-xl ">Đăng Nhập</legend>
      <label class="label">Email</label>
      <input type="email" class="input" placeholder="Nhập Email" />
      <label class="label">Mật khẩu</label>
      <input type="password" class="input" placeholder="Nhập mật khẩu" />
      <label class="label mt-4">
        <input type="checkbox" checked class="checkbox" />
        <span>Ghi nhớ đăng nhập</span>
      </label>
      <button class="btn btn-neutral mt-4 text-base">Đăng Nhập</button>
      <span class="mt-8">Bạn chưa có tài khoản? <strong class="hover:underline">
          <RouterLink to="/register">Đăng ký</RouterLink>
        </strong></span>
    </fieldset>
  </div>
</template>