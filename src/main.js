// import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css'; // Impor gaya Bootstrap
import 'bootstrap'; // Impor JavaScript Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'; // Impor ikon Bootstrap
// import axios from 'axios';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
