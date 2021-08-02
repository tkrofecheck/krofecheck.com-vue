import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },

  {
    path: '/portfolio',
    name: 'portfolio',
    component: () =>
      import(/* webpackChunkName: "portfolio" */ '@/views/Portfolio.vue'),
  },

  {
    path: '/contact',
    name: 'contact',
    component: () =>
      import(/* webpackChunkName: "contact" */ '@/views/Contact.vue'),
  },

  {
    path: '*',
    name: '404',
    component: () =>
      import(/* webpackChunkName: "404" */ '@/views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});

export default router;
