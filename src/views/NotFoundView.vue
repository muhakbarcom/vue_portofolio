<script setup>
import Project from '../components/Project.vue';
</script>
<template>
  <div class="card" style="margin-top: 15vh">
    <div class="card-body">
      <div class="row mb-5">
        <h1 class="display-6 fw-bold mb-4">404 Not Found</h1>
        <p class="lead">
          Halaman yang Anda cari tidak ditemukan. Silakan kembali ke
          <router-link to="/" class="link-primary"> halaman utama </router-link>
          .
        </p>
      </div>
    </div>
  </div>
</template>
