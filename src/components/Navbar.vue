<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <router-link to="/" class="nav-link" aria-current="page"
        ><a class="navbar-brand" href="#">Muh Akbar</a></router-link
      >

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
            <router-link to="/" class="nav-link" aria-current="page"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <a href="http://blog.muhakbar.com" class="nav-link" target="_blank"
              >Blog</a
            >
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link">Projects</router-link>
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

<script>
// jika tampilan mobile maka tambahkan fixed-bottom di .navbar
</script>

<style>
.navbar {
  background-color: #1b1f23;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}

.navbar-brand {
  color: rgba(255, 255, 255, 0.9);
}

.navbar-toggler {
  color: rgba(255, 255, 255, 0.9);
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
}

.nav-link:hover {
  color: rgba(255, 255, 255, 0.9);
}

.nav-link.active {
  color: rgba(255, 255, 255, 0.9);
}

.nav-link.active:hover {
  color: rgba(255, 255, 255, 0.9);
}

.nav-link::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background-color: #fff;
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.active::after {
  width: 100%;
}

.nav-link.active:hover::after {
  width: 100%;
}

.navbar-toggler-icon {
  background-image: url('data:image/svg+xml;charset=utf8,<svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M0 448h448v-64H0v64zm0-160h448v-64H0v64zm0-192v64h448V96H0z"/></svg>');
}

@media (max-width: 991.98px) {
  .navbar-collapse {
    background-color: #1b1f23;
  }

  .navbar-nav {
    margin-top: 10px;
  }

  .nav-item {
    margin: 0 0 10px 0;
  }

  .nav-link {
    color: #fff;
  }

  .nav-link:hover {
    color: #fff;
  }

  .nav-link.active {
    color: #fff;
  }

  .nav-link.active:hover {
    color: #fff;
  }

  .fixed-top {
    position: fixed !important;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1030;

    top: auto !important;
  }
}
</style>
