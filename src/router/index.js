import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TrackerView from '@/views/TrackerView.vue'
import SavingsView from '@/views/SavingsView.vue'
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
      path: '/savings-goals',
      name: 'savings',
      component: SavingsView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
  ],
})

export default router
