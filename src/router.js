import { createRouter, createWebHistory } from 'vue-router';
// import Home from './pages/home/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/home/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
