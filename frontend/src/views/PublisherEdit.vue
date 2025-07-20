<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { useRouter, useRoute } from 'vue-router';
import { ref } from "vue";
import PublisherService from '../services/publisher.service';
import { push } from 'notivue';

const publisherService = new PublisherService();
const router = useRouter();
const route = useRoute();
const publisher_id = route.params.id;

const name = ref("");
const address = ref("");

const handlePublisherProfileEdit = async (publisher_id) => {
    try {
        const data = {
            name: name.value,
            address: address.value,
        };

        await publisherService.updatePublisher(publisher_id, data);

        push.success("Cập nhật thông tin nhà xuất bản thành công");
        router.push("/publishers");
    } catch (error) {
        console.log(error);
        push.error("Đã xảy ra lỗi khi cập nhật thông tin nhà xuất bản");
    }
};

const handlePublisherProfileDelete = async (publisher_id) => {
    try {
        if (confirm("Xác nhận xóa nhà xuất bản?")) {
            await publisherService.deletePublisher(publisher_id);
            push.success("Xóa nhà xuất bản thành công");
            router.push("/publishers");
        }
    } catch (error) {
        push.error("Đã xảy ra lỗi khi xóa nhà xuất bản");
        console.log(error);
    }
};
</script>

<template>
    <div class="flex min-h-screen flex-col">
        <Header></Header>
        <div class="flex justify-center items-center flex-grow">
            <form @submit.prevent class="mb-24">
                <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
                    <legend class="fieldset-legend text-xl">Chỉnh sửa nhà xuất bản</legend>

                    <label class="label">Tên nhà xuất bản</label>
                    <input v-model=" name " type="text" class="input" placeholder="Nhập tên nhà xuất bản" />
                    <!-- TODO form validation -->
                    <label class="label">Địa chỉ</label>
                    <input v-model=" address " type="text" class="input" placeholder="Nhập địa chỉ" />

                    <div class="grid grid-cols-2 gap-2">
                        <button @click=" handlePublisherProfileEdit( publisher_id )"
                            class="btn btn-neutral mt-4 hover:scale-[1.01] text-base">Cập nhật</button>
                        <button @click=" handlePublisherProfileDelete( publisher_id )"
                            class="btn btn-neutral mt-4 hover:scale-[1.01] text-base">Xóa</button>
                    </div>

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