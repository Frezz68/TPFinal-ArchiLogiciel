import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/AccueilView.vue'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/accueil',
      name: 'acceuil',
      component: Accueil,
      /*beforeEnter: (to, from, next) => {
        const userStore = useUserStore();
        if (userStore.token) {
          next();
        } else {
          next({ name: 'login' });
        }
      }*/
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

export default router
