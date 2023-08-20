<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <Navbar />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <RouterView />
      </div>
    </div>
  </div>
</template>
