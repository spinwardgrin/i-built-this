import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/IMadeThis.vue'),
  },

  {
    path: '/playing',
    component: () => import('pages/PlayingExamples.vue'),
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFoundTW.vue'),
  },
];

export default routes;
