import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Muhammad Akbar' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About' },
    },
    {
      path: '/portofolio',
      name: 'portofolio',
      component: () => import('../views/PortofolioView.vue'),
      meta: { title: 'Portofolio', subtitle: 'My Portofolio' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: { title: 'Contact Me' },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const defaultTitle = 'Muhammad Akbar'; // Judul default
  document.title = to.meta.title || defaultTitle; // Mengatur judul halaman sesuai meta atau default
  next();
});

export default router;
