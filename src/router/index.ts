import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import ProductLine from '@/views/ProductLine.vue';
import ConfigureProduct from '@/views/ConfigureProduct.vue';
import NotFound from '@/views/404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/product-line',
    component: ProductLine,
    children: [
      {
        name: 'productLine',
        path: ':productLine',
        component: ProductLine,
      },
    ],
  },
  {
    path: '/configure-product',
    name: 'configureProduct',
    component: ConfigureProduct,
  },
  {
    path: '*',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
