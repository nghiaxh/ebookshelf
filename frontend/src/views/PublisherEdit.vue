<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from "vue";
import PublisherService from '../services/publisher.service';
import { push } from 'notivue';
import { publisherSchema } from "../validations/publisher.validation";
import { useForm, useField } from "vee-validate";

const publisherService = new PublisherService();
const router = useRouter();
const route = useRoute();
const publisher_id = route.params.id;


const { handleSubmit, setValues } = useForm({
    validationSchema: publisherSchema,
});

const handlePublisherProfileEdit = handleSubmit(async (values) => {
    try {
        await publisherService.updatePublisher(publisher_id, values);

        push.success("Cập nhật thông tin nhà xuất bản thành công");
        router.push("/publishers");
    } catch (error) {
        console.log(error);
        push.error("Đã xảy ra lỗi khi cập nhật thông tin nhà xuất bản");
    }
});

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

const { value: name, errorMessage: nameError } = useField("name");
const { value: address, errorMessage: addressError } = useField("address");

onMounted(async () => {
    try {
        const publisher_data = await publisherService.getPublisherById(publisher_id);
        setValues({
            name: publisher_data.name,
            address: publisher_data.address
        });
    } catch (error) {
        console.log(error);
    }
});
</script>

<template>
    <div class="flex min-h-screen flex-col">
        <Header></Header>
        <div class="flex justify-center items-center flex-grow">
            <form @submit.prevent class="mb-24">
                <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-base">
                    <legend class="fieldset-legend text-xl">Chỉnh sửa nhà xuất bản</legend>

                    <label class="label">Tên nhà xuất bản</label>
                    <input v-model=" name " type="text" class="input w-full" placeholder="Nhập tên nhà xuất bản" />
                    <span class="text-sm text-red-600">{{ nameError }}</span>

                    <label class="label">Địa chỉ</label>
                    <input v-model=" address " type="text" class="input w-full" placeholder="Nhập địa chỉ" />
                    <span class="text-sm text-red-600">{{ addressError }}</span>

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