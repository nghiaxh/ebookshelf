<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import InputSearch from '../components/InputSearch.vue';

import { useStaffInfo } from '../composables/useStaffInfo';

const { role: staff_role } = useStaffInfo();

</script>

<template>
    <div class="flex flex-col min-h-screen overflow-hidden">
        <Header></Header>
        <div class="flex-grow flex-wrap mx-16 my-8">
            <div class="grid grid-cols-1 gap-4 place-items-center">
                <!-- TODO create composable useUserList -->
                <InputSearch></InputSearch>
                <template v-if=" staff_role === 'staff' ">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <button class="btn btn-neutral">Thêm người dùng</button>
                        <button class="btn btn-neutral">Xóa tất người dùng</button>
                    </div>
                </template>
            </div>
            <div class="grid place-items-center">
                User list
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>