<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { push } from 'notivue';
import PublisherService from "../services/publisher.service";
import { useForm, useField } from "vee-validate";
import { publisherSchema } from '../validations/publisher.validation';

const router = useRouter();
const publisherService = new PublisherService();

const { handleSubmit } = useForm({
    validationSchema: publisherSchema,
});

const handleCreatePublisher = handleSubmit(async (values) => {
    try {
        await publisherService.createPublisher(values);
        push.success("Thêm nhà xuất bản thành công");

        router.push("/publishers");
    } catch (error) {
        console.log(error);
        push.error("Đã có lỗi xảy ra khi tạo nhà xuất bản");
    }
});

const { value: name, errorMessage: nameError } = useField("name");
const { value: address, errorMessage: addressError } = useField("address");
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
                    <span class="text-sm text-red-600">{{ nameError }}</span>
                    
                    <label class="label">Địa chỉ</label>
                    <input v-model=" address " type="text" class="input" placeholder="Nhập địa chỉ" />
                    <span class="text-sm text-red-600">{{ addressError }}</span>

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