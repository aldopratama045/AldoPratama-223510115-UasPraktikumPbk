import { createRouter, createWebHistory } from 'vue-router';
import WeatherWidget from './components/WeatherWidget.vue';

const routes = [
  { path: '/uas', component: WeatherWidget },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;