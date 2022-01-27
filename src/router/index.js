import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/DLC-song.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/base-song',
    name: 'Base-song',
    component: () => import(/* webpackChunkName: "about" */ '../views/Base-song.vue')
  },
  {
    path: '/dlc-song',
    name: 'DLC-song',
    component: () => import(/* webpackChunkName: "about" */ '../views/DLC-song.vue')
  },
  {
    path: '/login',
    name: 'Log-in',
    component: () => import(/* webpackChunkName: "about" */ '../views/Log-in.vue')
  },
  {
    path: '/*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
