<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

</script>
<template>
    <Header></Header>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8 h-screen w-3/4 place-items-center">
        <div class="flow-root">
            <dl class="-my-3 divide-y divide-gray-200 rounded border border-gray-200 text-sm *:even:bg-gray-50">
                <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Title</dt>
                    <dd class="text-gray-700 sm:col-span-2">Mr</dd>
                </div>
                <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Name</dt>
                    <dd class="text-gray-700 sm:col-span-2">John Frusciante</dd>
                </div>
                <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Occupation</dt>
                    <dd class="text-gray-700 sm:col-span-2">Guitarist</dd>
                </div>
                <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Salary</dt>
                    <dd class="text-gray-700 sm:col-span-2">$1,000,000+</dd>
                </div>
                <div class="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <dt class="font-medium text-gray-900">Bio</dt>
                    <dd class="text-gray-700 sm:col-span-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                        doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                        aspernatur neque molestiae labore aliquam soluta architecto?
                    </dd>
                </div>
            </dl>
        </div>
    </div>
    <Footer></Footer>
</template>