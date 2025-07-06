        <script setup>
        import { ref } from 'vue';
        import { useRouter } from 'vue-router';
        import UserService from '../services/user.service';

        const userService = new UserService();

        const router = useRouter();

        const username = ref("");
        const password = ref("");

        const handleUserLogin = async () => {
          try {
            const response = await userService.login(username.value, password.value);

            console.log(response.data);

            if (response?.data?.token) {
              localStorage.setItem("authenticateToken", response.data.token);
              localStorage.setItem("name", response.data.user.name);
              localStorage.setItem("birthday", response.data.user.birthday);
              localStorage.setItem("email", response.data.user.email);
              localStorage.setItem("phone", response.data.user.phone);
              localStorage.setItem("gender", response.data.user.gender);
              localStorage.setItem("address", response.data.user.address);
              localStorage.setItem("username", response.data.user.username);
              localStorage.setItem("user_id", response.data.user.user_id);
              localStorage.setItem("role", "user");
              router.push("/books");
            }

          } catch (error) {
            alert("Đăng nhập thất bại");
            console.error(error.response?.data || error);
          }
        };
</script>

<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8 place-items-center h-screen">
    <form @submit.prevent class="mb-24">
      <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
        <!-- User login -->
        <legend class="fieldset-legend text-xl ">Đăng Nhập</legend>

        <label class="label" for="username">Tên đăng nhập</label>
        <input v-model=" username " id="username" type="text" minlength="3" maxlength="18" class="input" required
          placeholder="Nhập tên đăng nhập" />

        <label class="label" for="password">Mật khẩu</label>
        <input v-model=" password " id="password" type="password" minlength="3" maxlength="18" class="input" required
          placeholder="Nhập mật khẩu" />

        <button @click=" handleUserLogin " type="submit" class="btn btn-neutral mt-4 text-base hover:scale-[1.01]">Đăng
          Nhập</button>

        <span class="mt-8">Bạn chưa có tài khoản? <strong class="hover:underline">
            <RouterLink to="/user/register">Đăng ký</RouterLink>
          </strong></span>
        <span>Bạn là nhân viên? <strong class="hover:underline">
            <RouterLink to="/staff/login">Đăng nhập</RouterLink>
          </strong></span>
      </fieldset>
    </form>
  </div>
</template>

