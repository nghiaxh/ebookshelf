<template>
    
  <div class="flex justify-center items-center h-screen">
    <form @submit.prevent class="mb-24">
      <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
        <legend class="fieldset-legend text-xl">Mượn sách</legend>

        <label class="label">Ngày mượn</label>
        <input type="date" class="input" />

        <label class="label">Ngày trả</label>
        <input type="date" class="input" />

        <label class="label">Số lượng</label>
        <input type="number" class="input" min="1" value="1" />

        <button class="btn btn-neutral mt-4 hover:scale-[1.01] text-base">Xác nhận mượn</button>

        <span class="mt-8">
          <strong class="hover:underline">
            <RouterLink to="/bookdetails" class="text-base">Quay lại</RouterLink>
          </strong>
        </span>
      </fieldset>
    </form>
  </div>
  
</template>