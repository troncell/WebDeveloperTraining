import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Answer from '../views/Answer.vue'
import Score from '../views/Score.vue'
import Takephoto from '../views/TakePhoto.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/answer',
    name: 'answer',
    component: Answer,
  },
  {
    path: '/score/:score',
    name: 'score',
    component: Score,
  },
  {
    path: '/takephoto/:score',
    name: 'takephoto',
    component: Takephoto,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
