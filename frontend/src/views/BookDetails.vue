<script setup>
</script>

<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 mt-16 h-screen">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8 mt-8">

        <div class="flow-root">
          <dl class="-my-3 divide-y divide-gray-200 rounded border border-gray-200 text-sm *:even:bg-gray-50">

            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-bold text-black text-xl">Thông tin chi tiết</dt>
            </div>

            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-medium text-gray-900">Tiêu đề sách</dt>

              <dd class="text-gray-700 sm:col-span-2">ABCD</dd>
            </div>

            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-medium text-gray-900">Tác giả</dt>

              <dd class="text-gray-700 sm:col-span-2">ABC</dd>
            </div>

            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-medium text-gray-900">Năm xuất bản</dt>

              <dd class="text-gray-700 sm:col-span-2">2025</dd>
            </div>

            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-medium text-gray-900">Đơn giá</dt>

              <dd class="text-gray-700 sm:col-span-2">997.000 VNĐ</dd>
            </div>

            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt class="font-medium text-gray-900">Bio</dt>

              <dd class="text-gray-700 sm:col-span-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                aspernatur neque molestiae labore aliquam soluta architecto?
              </dd>
            </div>

            <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">

              <div class="rating ml-8">
                <input type="radio" name="rating-1" class="mask mask-star" aria-label="1 star" />
                <input type="radio" name="rating-1" class="mask mask-star" aria-label="2 star" checked="checked" />
                <input type="radio" name="rating-1" class="mask mask-star" aria-label="3 star" />
                <input type="radio" name="rating-1" class="mask mask-star" aria-label="4 star" />
                <input type="radio" name="rating-1" class="mask mask-star" aria-label="5 star" />
              </div>

              <button class="btn btn-neutral hover:scale-[1.01]">Yêu thích</button>
              <button class="btn btn-neutral hover:scale-[1.01]">Mượn sách</button>
            </div>

          </dl>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="rounded-box shadow-xl" alt="" />
        </div>

      </div>
    </div>
  </section>
</template>