<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="container" style="min-height: fit-content">
      <div class="row" style="margin-top: 100px">
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
      </div>

      <div class="row mt-5">
        <div class="title-greeting">
          <p>
            I am Muhammad Akbar, I graduated from D3 Informatics Management. I
            enjoy analyzing how a system is created and works. but it feels more
            fun to make a code and run it!.
          </p>
          <p>
            I am a systems analyst who enjoys being a programmer, especially a
            backend developer.
          </p>
          <p>
            Outside of programming, I enjoy my hobby of motorbikes. I enjoy
            every kilometer when touring or riding casually with friends.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>
<style>
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
