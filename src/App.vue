<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Navbar_mobile from './components/Navbar_mobile.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <Navbar />
  <!-- <Navbar_mobile /> -->
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --smoky-black: #101010;
  --black: #000;
  --card-dark: #1b1f23;
  --box-shadow-dark: 0 0 10px rgba(0, 0, 0, 0.1);
  --title-sub-text: #fff;
}

.main {
  background-color: var(--black);
  min-height: 100vh;
  max-width: 100%; /* Atur lebar maksimum agar sesuai dengan lebar layar */
  margin: 0 auto; /* Pusatkan .main di tengah layar jika diperlukan */
}

.card {
  background-color: var(--card-dark) !important;
  border-radius: 10px !important;
  box-shadow: var(--box-shadow-dark) !important;
  color: rgba(255, 255, 255, 0.9) !important;
}

#sub_section {
  /* batasi lebar 3/4 dari vw */
  max-width: 60vw;
  /* tempatkan posisi di tengah */
  margin: 0 auto;
  margin-top: 15vh;
}

.title_sub {
  color: var(--title-sub-text);
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

/* responsive */
@media (max-width: 1200px) {
  #sub_section {
    max-width: 90vw;
    margin-top: 10vh;
  }

  .title_sub {
    font-size: 1.5rem;
  }
}
</style>
