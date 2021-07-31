import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Portfolio from '@/views/Portfolio.vue';
import NotFoundComponent from '@/views/NotFoundComponent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },

  {
    path: '*',
    name: '404',
    component: NotFoundComponent,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
