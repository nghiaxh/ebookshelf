<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8 place-items-center h-screen">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 lg:text-base">

      <legend class="fieldset-legend text-xl ">Đăng Nhập</legend>
      <label class="label">Email</label>
      <input type="email" class="input" placeholder="Nhập Email" />
      <label class="label">Mật khẩu</label>
      <input type="password" class="input" placeholder="Nhập mật khẩu" />
      <label class="label mt-2">
        <input type="checkbox" checked class="checkbox" />
        <span>Ghi nhớ đăng nhập</span>
      </label>
      <button class="btn btn-neutral mt-2 lg:text-base">Đăng Nhập</button>
      
      <label class="label mt-2">Hoặc đăng nhập với tài khoản</label>
      <!-- Google Login -->
      <button class="btn bg-white text-black border-[#e5e5e5] lg:text-base">
        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
          </g>
        </svg>
        Đăng Nhập Google
      </button>
      
      <span class="mt-8">Bạn chưa có tài khoản? <strong class="hover:underline">
          <RouterLink to="/register">Đăng ký</RouterLink>
        </strong></span>
    </fieldset>
  </div>
</template>