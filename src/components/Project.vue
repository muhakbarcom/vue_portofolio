<template>
  <div id="sub_section">
    <div class="row">
      <!-- load title -->
      <h2 class="title_sub">{{ title }}</h2>
    </div>
    <div class="row">
      <div
        class="col-xs-6 col-md-6 col-lg-4 mb-2"
        v-for="project in projects"
        :key="project.name"
      >
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="project-card">
                <a :href="project.link" target="_blank">
                  <div class="project-img-container">
                    <img
                      :src="project.imageURL"
                      alt="Project Image"
                      class="project-img"
                    />
                    <div class="project-img-overlay"></div>
                  </div>
                </a>
                <p class="project-title">{{ project.name }}</p>
                <p class="project-desc">{{ project.description }}</p>
                <div class="tags">
                  <span class="badge" v-for="tag in project.tags" :key="tag">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('/data/portofolio.json'); // Fetch data dari file JSON

        // ubah path image menjadi /assets/img/project/${project.image}
        this.projects = response.data.map((project) => ({
          ...project,
          imageURL: `/img/project/${project.imageName}`,
        }));

        // jika tidak ada link maka ganti link jadi url root
        this.projects = this.projects.map((project) => ({
          ...project,
          link: project.link ? project.link : '/',
        }));

        // filter hanya project yang isActive = true saja
        this.projects = this.projects.filter((project) => project.isActive);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
  computed: {
    title() {
      // Mengakses variable 'title' dari objek 'meta' di dalam rute
      return this.$route.meta.subtitle;
    },
  },
};
</script>

<style>
.project-card {
  margin-top: -3rem;
  /* height: 45vh; */
  height: 22rem;
  width: 100%;
}

.project-img {
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 10px;
}

.project-img:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

.project-img-container {
  position: relative;
  overflow: hidden;
}

.project-img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0
  ); /* Atur opacity menjadi 0 agar lapisan hitam tidak terlihat pada awalnya */
  transition: background-color 0.5s; /* Efek transisi untuk perubahan warna lapisan hitam */
}

.project-img-container:hover .project-img-overlay {
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Ubah opacity menjadi 0.5 saat dihover */
  cursor: pointer;
  /* tambahkan icon mata */
  background-image: url('/img/others/icons8-chain-100.png');
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: center;
  /* tambahkan efek transisi */
  transition: background-color 0.5s, background-image 0.9s; /* Gabungkan semua transisi menjadi satu properti */
}

.project-title {
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.5;
  margin-top: 0.5rem;
}

.project-desc {
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
}

.tags {
  /* Tempatkan di bawah secara tetap */
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 0.5rem;

  /* Scroll jika melebihi batas */
  overflow-x: auto;
  white-space: nowrap;

  /* Mengatur tampilan */
  /* background-color: rgba(255, 255, 255, 0.9); */
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tags .badge {
  margin-right: 0.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  /* background-color: rgba(255, 255, 255, 0.2); */
  /* background gradient */
  background: linear-gradient(
    90deg,
    rgba(79, 133, 248, 1) 0%,
    rgba(79, 133, 248, 0.9) 100%
  );
  color: rgba(255, 255, 255, 0.9);
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
}

.tags::-webkit-scrollbar {
  width: 8px; /* Lebar scrollbar */
  height: 8px; /* Tinggi scrollbar */
  background-color: rgba(0, 0, 0, 0.1); /* Warna latar belakang scrollbar */
}

.tags::-webkit-scrollbar-track {
  background: transparent; /* Warna latar belakang track scrollbar */
}

.tags::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.4); /* Warna thumb scrollbar */
  border-radius: 10px; /* Border radius thumb scrollbar */
  border: 2px solid transparent; /* Border thumb scrollbar */
}

.tags::-webkit-scrollbar-thumb:hover {
  background-color: rgba(
    255,
    255,
    255,
    0.6
  ); /* Warna thumb scrollbar saat dihover */
}
</style>
