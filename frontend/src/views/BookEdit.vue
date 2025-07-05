<template>
    <nav aria-label="Breadcrumb">
        <ol class="flex items-center gap-2 text-md text-black m-8 justify-center">
            <li>
                <RouterLink to="/" class="hover:underline"> Trang chủ </RouterLink>
            </li>

            <li class="rtl:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </li>

            <li>
                <RouterLink to="/books" class="hover:underline"> Danh mục sách </RouterLink>
            </li>

            <li class="rtl:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </li>

            <li>
                <RouterLink to="/bookedit" class="hover:underline"> Chỉnh sửa sách </RouterLink>
            </li>
        </ol>
    </nav>

    <div class="flex justify-center items-center h-screen -mt-16">
        <form @submit.prevent class="mb-24">
            <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 lg:text-base">
                <legend class="fieldset-legend text-xl">Chỉnh sửa sách</legend>

                <label class="label">Tiêu đề sách</label>
                <input type="text" class="input" placeholder="Nhập tiêu đề sách" />

                <label class="label">Tác giả</label>
                <input type="text" class="input" placeholder="Nhập tên tác giả" />

                <label class="label">Năm xuất bản</label>
                <input type="number" class="input" min="0" placeholder="Nhập năm xuất bản" />

                <label class="label">Đơn giá</label>
                <input type="number" class="input" min="0" placeholder="Nhập đơn giá" />

                <label class="label">Mô tả</label>
                <textarea class="textarea textarea-bordered h-24" placeholder="Mô tả sách"></textarea>

                <label class="label">Ảnh bìa</label>
                <input type="file" class="file-input file-input-bordered w-full max-w-xs" />

                <div class="flex justify-around items-center">
                    <button class="btn btn-neutral mt-4 text-base hover:scale-[1.01] lg:text-base">Lưu thay đổi</button>
                    <button class="btn btn-neutral mt-4 text-base hover:scale-[1.01] lg:text-base">Xóa sách</button>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script setup>

</script>