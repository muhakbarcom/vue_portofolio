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
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectView.vue'),
      meta: { title: 'Projects', subtitle: 'My Projects' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: { title: 'Contact Me' },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: (to) => {
        const path = to.path.substring(1); // Hapus karakter '/' dari awal path
        return { name: path || 'home' }; // Arahkan ke rute sesuai path atau '/'
      },
    },
    // Definisikan rute 404
    {
      path: '/:pathMatch(.*)',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: { title: '404 Not Found' },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const defaultTitle = 'Muhammad Akbar'; // Judul default
  document.title = to.meta.title || defaultTitle; // Mengatur judul halaman sesuai meta atau default
  next();
});

export default router;
