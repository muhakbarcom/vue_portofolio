<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Navbar_mobile from './components/Navbar_mobile.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <Header />
        <Navbar />
        <Navbar_mobile />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <RouterView />
      </div>
    </div>
  </div>
</template>
