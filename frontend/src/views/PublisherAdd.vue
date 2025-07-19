<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { useRouter } from 'vue-router';
import { ref } from 'vue';
import PublisherService from "../services/publisher.service";

const router = useRouter();
const publisherService = new PublisherService();

const name = ref("");
const address = ref("");

const handleCreatePublisher = async () => {
    try {
        const data = {
            name: name.value,
            address: address.value
        };
        await publisherService.createPublisher(data);
        alert("Thêm nhà xuất bản thành công");

        router.push("/publishers");
    } catch (error) {
        console.log(error);
        alert("Đã có lỗi xảy ra khi tạo nhà xuất bản");
    }
};
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <Header></Header>
        <div class="flex flex-grow justify-center items-center">
            <form @submit.prevent=" handleCreatePublisher " class="mb-24">
                <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
                    <legend class="fieldset-legend text-xl">Thêm nhà xuất bản mới</legend>

                    <label class="label">Tên nhà xuất bản</label>
                    <input v-model=" name " type="text" class="input" placeholder="Nhập tên nhà xuất bản" />
                    <!-- TODO form validation -->
                    <label class="label">Địa chỉ</label>
                    <input v-model=" address " type="text" class="input" placeholder="Nhập địa chỉ" />

                    <button class="btn btn-neutral mt-4 hover:scale-[1.01] text-base">Thêm nhà xuất bản</button>

                    <span class="mt-8">
                        <strong class="hover:underline">
                            <RouterLink to="/publishers" class="text-base">Quay lại</RouterLink>
                        </strong>
                    </span>
                </fieldset>
            </form>
        </div>
        <Footer></Footer>
    </div>
</template>