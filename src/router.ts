import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ErrorTestPage from './pages/ErrorTestPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/error-test', component: ErrorTestPage },
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});