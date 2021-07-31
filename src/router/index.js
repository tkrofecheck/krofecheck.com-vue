import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    beforeEnter: (to, from, next) => {
      next('/404');
    },
  },

  {
    path: '/404',
    name: '404',
    component: () => import('@/views/NotFoundComponent'),
  },

  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/portfolio',
    name: 'Portfolio',
    // component: Portfolio,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Portfolio.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
