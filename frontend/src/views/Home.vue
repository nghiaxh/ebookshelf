<template>
  <div class="flex flex-col min-h-screen">
    <Header></Header>
    <div class="hero flex-grow transition-all" :style=" { backgroundImage: `url(${ background })` } ">
      <div class=" hero-overlay backdrop-brightness-60 backdrop-blur-xs"></div>
      <div class="hero-content text-neutral-content text-center">
        <div class="max-w-md">
          <h1 class="mb-8 text-5xl font-bold">CTU Ebookshelf <br>Kệ sách điện tử</h1>
          <p class="mb-8 text-2xl">
            Kết nối dễ dàng với kho tàng kiến thức.
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { ref, onMounted, onUnmounted } from 'vue';

const backgroundImages = [
  '/images/t2_de_sach_sau_khi_doc.jpg',
  '/images/t2_khu_vuc_tu_hoc_2.jpg',
  '/images/t2_sach_1.jpg',
  '/images/t2_sach_2.jpg',
  '/images/t3_ke_sach_1.jpg',
  '/images/t3_ke_sach_2.jpg',
  '/images/t3_luan_van.jpg',
  '/images/t3_phong_hoc_ngoai_ngu_3.jpg'
];

const background = ref("");

const getRandomBackground = () => {
  const index = Math.floor(Math.random() * backgroundImages.length);
  background.value = backgroundImages[index];
};

let imageIntervalId;
const imageInterval = () => {
  imageIntervalId = setInterval(getRandomBackground, 10000);
};
onMounted(() => {
  getRandomBackground();
  imageInterval();
});

onUnmounted(() => {
  clearInterval(imageIntervalId);
});
</script>