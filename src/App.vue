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
.main {
  background-color: #000;
  min-height: 100vh;
  max-width: 100%; /* Atur lebar maksimum agar sesuai dengan lebar layar */
  margin: 0 auto; /* Pusatkan .main di tengah layar jika diperlukan */
}

.card {
  background-color: #1b1f23 !important;
  border-radius: 10px !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) !important;
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
  color: #fff;
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

/* @media (max-width: 900px) {
  #sub_section {
    max-width: 90vw;
    margin-top: 10vh;
  }

  .title_sub {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  #sub_section {
    max-width: 90vw;
    margin-top: 10vh;
  }

  .title_sub {
    font-size: 1.5rem;
  }
} */
</style>
