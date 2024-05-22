<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="container" style="min-height: fit-content">
      <div class="row home_card d-none">
        <div class="card">
          <div class="image-bg-home">
            <div class="bg-home-overlay">BACKEND DEVELOPER</div>
            <div class="bg-home-overlay-2">BACKEND DEVELOPER</div>
            <div class="bg-home-overlay-3"></div>
          </div>
          <div class="image-bg-akbar"></div>
          <div class="card-body">
            <h1 class="display-6 fw-bold">Hi, Akbar's here!</h1>
          </div>
          <span class="modern-line-animation"></span>
        </div>
        <div class="moving-border"></div>
      </div>

      <div class="row mt-5" style="margin-top: 100px !important">
        <div class="boxx">
          <div class="border top"></div>
          <div class="border right"></div>
          <div class="border bottom"></div>
          <div class="border left"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>
<style>
.boxx {
  width: 300px;
  height: 400px;
  background-color: #ccc;
  position: relative;
  /* shadow glow */

  border-radius: 10px;

  /* shadow inner and outter */
  box-shadow: 0 0 100px rgba(255, 255, 255, 0.5);
}

.border {
  position: absolute;
  background-color: white;
}

.top {
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  /* delay before animation */
  animation-delay: 2s;
  animation: topBorder 3s infinite ease;
}

.right {
  top: 0;
  right: 0;
  width: 2px;
  height: 0;
  animation: rightBorder 2s linear forwards 2s;
}

.bottom {
  bottom: 0;
  right: 0;
  width: 0;
  height: 2px;
  animation: bottomBorder 2s linear forwards 4s;
}

.left {
  bottom: 0;
  left: 0;
  width: 2px;
  height: 0;
  animation: leftBorder 2s linear forwards 6s;
}

@keyframes topBorder {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes rightBorder {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}

@keyframes bottomBorder {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes leftBorder {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}

.home_card {
  margin-top: 6rem !important;
}

.image-bg-home {
  background-size: cover;
  background-position: center;
  height: 150px;
  max-height: 150px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  overflow: hidden;
  position: relative;
}

/* image-bg-akbar circle, on top center image-bg-home */
.image-bg-akbar {
  background-image: url('../assets/img/logo.jpg');
  background-size: cover;
  background-position: center;
  /* height with rem */
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.bg-home-overlay,
.bg-home-overlay-2,
.bg-home-overlay-3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Ubah nilai alpha sesuai kebutuhan */
  color: white;
  font-size: 100px; /* Sesuaikan ukuran teks sesuai kebutuhan */
  font-weight: bold;
}

.bg-home-overlay-2 {
  top: 10px; /* Atur posisi top sesuai kebutuhan */
}
.bg-home-overlay-3 {
  background-color: rgba(0, 0, 0, 0.3); /* Ubah nilai alpha sesuai kebutuhan */
}

.card-body {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.modern-line-animation {
  width: 100%;
  height: 2px;
  border-radius: 5px;
  background-color: #000;
  position: relative;
  overflow: hidden;
}

.modern-line-animation::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.7),
    transparent
  );
  animation: modern-line 5s linear infinite;
}

@keyframes modern-line {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.title-greeting {
  margin-top: 3rem;
  font-family: 'Poppins', sans-serif;
  color: rgba(255, 255, 255, 0.7);
  /* rata kanan kiri */
  text-align: justify;
  width: 70% !important;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1.5;
  letter-spacing: 0.5px;
}

/* responsive */
/* responsive bg-home-overlay font */
@media (max-width: 1200px) {
  .bg-home-overlay {
    font-size: 80px;
  }
  .bg-home-overlay-2 {
    font-size: 80px;
  }

  .title-greeting {
    width: 80% !important;
  }
}

@media (max-width: 992px) {
  .home_card {
    margin-top: 3rem !important;
  }
  .bg-home-overlay {
    font-size: 60px;
  }
  .bg-home-overlay-2 {
    font-size: 60px;
  }

  .title-greeting {
    width: 90% !important;
  }
}

@media (max-width: 768px) {
  .bg-home-overlay {
    font-size: 40px;
  }
  .bg-home-overlay-2 {
    font-size: 40px;
  }

  .title-greeting {
    width: 100% !important;
  }
}

@media (max-width: 576px) {
  .bg-home-overlay {
    font-size: 30px;
  }
  .bg-home-overlay-2 {
    font-size: 30px;
  }

  .title-greeting {
    width: 100% !important;
  }
}
</style>
