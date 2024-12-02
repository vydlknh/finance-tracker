import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TrackerView from '@/views/TrackerView.vue'
import SavingsView from '@/views/SavingsView.vue'
import GoalsView from '@/views/GoalsView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tracker',
      name: 'tracker',
      component: TrackerView
    },
    {
      path: '/savings',
      name: 'savings',
      component: SavingsView
    },
    {
      path: '/goals',
      name: 'goals',
      component: GoalsView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
  ],
})

export default router
