<template>
  <div class="navbar bg-base-100 shadow">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <RouterLink to="/" class="text-base hover:font-medium">Giới Thiệu</RouterLink>
            <RouterLink to="/books" class="text-base hover:font-medium">Danh Mục Sách</RouterLink>
            <RouterLink to="/" class="text-base hover:font-medium">Liên hệ</RouterLink>
          </li>
        </ul>
      </div>
      <RouterLink to="/" class="mx-4 text-xl font-bold hover:underline">Ebookshelf</RouterLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-base">
        <li>
          <RouterLink to="/" class="text-base hover:font-medium">Giới Thiệu</RouterLink>
        </li>
        <li>
          <RouterLink to="/books" class="text-base hover:font-medium">Danh Mục Sách</RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="text-base hover:font-medium">Danh Mục Yêu Thích</RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="text-base hover:font-medium">Liên Hệ</RouterLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <RouterLink to="/login" class="btn btn-neutral px-4 text-base">Đăng Nhập</RouterLink>
    </div>
  </div>

  <!-- banner -->
  <div class="border-b border-gray-200 bg-base-300 px-4 py-2 text-gray-900">
    <p class="text-center font-medium">
      Deadline còn khoảng 2 tháng 😢
    </p>
  </div>
</template>