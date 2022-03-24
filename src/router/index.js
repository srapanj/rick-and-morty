import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Locations from '../components/Location.vue'
import Episodes from '../components/Episodes.vue'
import Summer from '../components/Summer.vue'
import LocationDetail from '../components/LocationDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: Episodes
  },
  {
    path: '/summer',
    name: 'Summer',
    component: Summer
  },
  {
    path: '/locationdetail',
    name: 'Location Detail',
    component: LocationDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
