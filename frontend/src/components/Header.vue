<script setup>
import { useUserInfo } from "../composables/useUserInfo";
import { useStaffInfo } from "../composables/useStaffInfo";

const { user } = useUserInfo();
const { staff } = useStaffInfo();

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

          <template v-if=" staff.role === 'staff' ">
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
              <RouterLink to="/pendingborrow" class="text-base hover:font-medium">Đơn mượn sách</RouterLink>
            </li>
          </template>

          <template v-if=" user.role === 'user' ">
            <li>
              <RouterLink to="/books" class="text-base hover:font-medium">Danh Mục Sách</RouterLink>
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
      <RouterLink to="/" class="mx-4 text-xl font-bold hover:underline">Ebookshelf</RouterLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-base">

        <template v-if=" staff.role === 'staff' ">
          <li>
            <RouterLink to="/publisher" class="text-base hover:font-medium">Nhà xuất bản</RouterLink>
          </li>
          <li>
            <RouterLink to="/user" class="text-base hover:font-medium">Người dùng</RouterLink>
          </li>
          <li>
            <RouterLink to="/staffs" class="text-base hover:font-medium">Nhân viên</RouterLink>
          </li>
          <li>
            <RouterLink to="/books" class="text-base hover:font-medium">Sách</RouterLink>
          </li>
          <li>
            <RouterLink to="/pendingborrow" class="text-base hover:font-medium">Đơn mượn sách</RouterLink>
          </li>
        </template>

        <template v-if=" user.role === 'user' ">
          <li>
            <RouterLink to="/books" class="text-base hover:font-medium">Danh sách Sách</RouterLink>
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
    <div class="navbar-end">
      <template v-if=" !user.name ">
        <RouterLink to="/user/login" class="btn btn-neutral px-4 text-base mr-4 hover:scale-[1.01]">Đăng Nhập
        </RouterLink>
      </template>
      <template v-else-if=" user.role === 'user' ">
        <RouterLink to="/userprofile" class="mr-4 text-base font-bold hover:underline">Xin chào, {{ user.name }}
        </RouterLink>
      </template>
      <template v-else-if=" staff.role === 'staff' ">
        <RouterLink to="/staffprofile" class="mr-4 text-base font-bold hover:underline">Xin chào, {{ staff.name }}
        </RouterLink>
      </template>
    </div>
  </div>

  <!-- banner -->
  <div class="border-b border-gray-200 bg-base-300 px-4 py-2 text-gray-900">
    <p class="text-center font-medium">Deadline còn khoảng 1 tháng 😢</p>
  </div>

</template>