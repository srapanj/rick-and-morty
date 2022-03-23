import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Rick from '../components/Rick.vue'
import Morty from '../components/Morty.vue'
import Summer from '../components/Summer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rick',
    name: 'Rick',
    component: Rick
  },
  {
    path: '/morty',
    name: 'Morty',
    component: Morty
  },
  {
    path: '/summer',
    name: 'Summer',
    component: Summer
  }
]

const router = new VueRouter({
  routes
})

export default router
