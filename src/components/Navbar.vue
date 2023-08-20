<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Muh Akbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <!-- Perhatikan kelas "ms-auto" di sini -->
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <a href="http://blog.muhakbar.com" class="nav-link" target="_blank"
              >Blog</a
            >
          </li>
          <li class="nav-item">
            <router-link to="/portofolio" class="nav-link"
              >Portofolio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact Me</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
