<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import InputSearch from '../components/InputSearch.vue';

import PublisherService from "../services/publisher.service";
import PublisherCard from '../components/PublisherCard.vue';
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const publisherService = new PublisherService();
const router = useRouter();
const publishers = ref([]);
const searchText = ref("");
const role = computed(() => localStorage.getItem("role"));

const fetchPublishers = async () => {
    try {
        const response = await publisherService.getAllPublishers();
        // debug code later
        // console.log(response);
        publishers.value = response;
    } catch (error) {
        console.error(error);
    }
};

const searchFilteredPublishers = computed(() => {
    if (!searchText.value) return publishers.value;

    const keyword = searchText.value.toLowerCase();

    return publishers.value.filter(publisher => {
        const searchableText = [publisher.name, publisher.address]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();

        return searchableText.includes(keyword);
    });
});

const goToAddPublisher = () => {
    router.push({ name: "publisher.add" });
};

onMounted(fetchPublishers);
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <Header></Header>
        <section class="flex-grow mx-16 my-8">

            <div class="grid grid-cols-1 gap-4 place-items-center">

                <!-- TODO create composable usePublisherList -->
                <InputSearch v-model=" searchText "></InputSearch>

                <template v-if=" role === 'staff' ">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <button class="btn btn-neutral" @click=" goToAddPublisher ">Thêm nhà xuất bản</button>
                        <button class="btn btn-neutral">Xóa tất nhà xuất bản</button>
                    </div>
                </template>
            </div>

            <template v-if=" searchFilteredPublishers.length > 0 ">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 mt-8">
                    <PublisherCard v-for=" publisher in searchFilteredPublishers " :key=" publisher._id "
                        :publisher=" publisher "></PublisherCard>
                </div>
            </template>
            <template v-else>
                <div class="grid grid-cols-1 text-center mt-8">
                    <h1 class="text-5xl font-bold">Oops</h1>
                    <p class="py-6">Lỗi không thể tìm thấy người dùng</p>
                </div>
            </template>
        </section>
        <Footer></Footer>
    </div>
</template>