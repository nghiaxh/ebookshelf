<template>
  <div class="flex flex-col min-h-screen transition-all">
    <Header></Header>
    <div class="hero flex-grow bg-[url(/images/t2_sach_2.jpg)]">
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
</script>