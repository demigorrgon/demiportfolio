import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import RoadmapView from '../views/RoadmapView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {

    path: '/roadmap',
    name: 'roadmap',
    component: RoadmapView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/portfolio',
  routes
})

export default router
