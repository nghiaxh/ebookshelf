<template>
  <div class="flex justify-center items-center h-screen">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
      <legend class="fieldset-legend text-xl">Đăng Ký</legend>
      <label class="label">Email</label>
      <input type="email" class="input" placeholder="Nhập Email" />
      <label class="label">Mật khẩu</label>
      <input type="password" class="input" placeholder="Nhập mật khẩu" />
      <label class="label">Nhập lại mật khẩu</label>
      <input type="password" class="input" placeholder="Nhập lại mật khẩu" />
      <button class="btn btn-neutral mt-4 text-base">Đăng Ký</button>
      <span class="mt-8">Bạn đã có tài khoản? <strong class="hover:underline">
          <RouterLink to="/login">Đăng nhập</RouterLink>
        </strong></span>
    </fieldset>
  </div>
</template>