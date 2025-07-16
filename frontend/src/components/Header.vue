<script setup>
import { computed } from "vue";

const username = computed(() => localStorage.getItem("username"));
const role = computed(() => localStorage.getItem("role"));
</script>

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

          <template v-if=" role === 'staff' ">
            <li>
              <RouterLink to="/books" class="text-base hover:font-medium">Danh mục sách</RouterLink>
            </li>
            <li>
              <RouterLink to="/pendingborrow" class="text-base hover:font-medium">Đơn mượn sách</RouterLink>
            </li>
            <li>
              <RouterLink to="/publishers" class="text-base hover:font-medium">Nhà xuất bản</RouterLink>
            </li>
            <li>
              <RouterLink to="/users" class="text-base hover:font-medium">Người dùng</RouterLink>
            </li>
            <li>
              <RouterLink to="/staffs" class="text-base hover:font-medium">Nhân viên</RouterLink>
            </li>
            <li>
              <RouterLink to="/staffprofile" class="text-base hover:font-medium">Thông tin nhân viên</RouterLink>
            </li>
          </template>

          <template v-if=" role === 'user' ">
            <li>
              <RouterLink to="/books" class="text-base hover:font-medium">Danh mục sách</RouterLink>
            </li>
            <li>
              <RouterLink to="/checkingborrow" class="text-base hover:font-medium">Kiểm tra mượn sách</RouterLink>
            </li>
            <li>
              <RouterLink to="/userprofile" class="text-base hover:font-medium">Thông tin người dùng</RouterLink>
            </li>
          </template>

        </ul>
      </div>
      <RouterLink to="/" class="ml-2 text-base md:text-lg lg:text-xl font-bold hover:underline">Ebookshelf</RouterLink>
    </div>

    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-base">

        <template v-if=" role === 'staff' ">
          <li>
            <RouterLink to="/books" class="text-base hover:font-medium">Danh mục sách</RouterLink>
          </li>
          <li>
            <RouterLink to="/borrowpending" class="text-base hover:font-medium">Đơn mượn sách</RouterLink>
          </li>
          <li>
            <RouterLink to="/publishers" class="text-base hover:font-medium">Nhà xuất bản</RouterLink>
          </li>
          <li>
            <RouterLink to="/users" class="text-base hover:font-medium">Người dùng</RouterLink>
          </li>
          <li>
            <RouterLink to="/staffs" class="text-base hover:font-medium">Nhân viên</RouterLink>
          </li>
          <li>
            <RouterLink to="/staffprofile" class="text-base hover:font-medium">Thông tin nhân viên</RouterLink>
          </li>
        </template>

        <template v-if=" role === 'user' ">
          <li>
            <RouterLink to="/books" class="text-base hover:font-medium">Danh mục sách</RouterLink>
          </li>
          <li>
            <RouterLink to="/borrowcheck" class="text-base hover:font-medium">Kiểm tra mượn sách</RouterLink>
          </li>
          <li>
            <RouterLink to="/userprofile" class="text-base hover:font-medium">Thông tin người dùng</RouterLink>
          </li>
        </template>
      </ul>
    </div>

    <div class="navbar-end">
      <template v-if=" !username ">
        <RouterLink to="/user/login" class="btn btn-neutral px-4 text-base mr-2 hover:scale-[1.01]">Đăng Nhập
        </RouterLink>
      </template>
      <template v-else-if=" role === 'user' ">
        <RouterLink to="/userprofile" class="mr-2 text-base font-bold hover:underline">Xin chào, {{ username }}
        </RouterLink>
      </template>
      <template v-else-if=" role === 'staff' ">
        <RouterLink to="/staffprofile" class="mr-2 text-base font-bold hover:underline">Xin chào, {{ username }}
        </RouterLink>
      </template>
    </div>
  </div>
</template>