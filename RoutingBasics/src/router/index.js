import Home from '@/Components/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
// import NotFound from './Components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/Components/About.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/Components/Contact.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not found',
    component: () => import('@/Components/NotFound.vue'),
  },
  {
    path: '/blogs/:id',
    name: 'blog',
    component: () => import('@/Components/BlogItemDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log('Navigating from', from.fullPath, 'to', to.fullPath)
  const isAuthenticated = false

  if (to.path === '/about' && !isAuthenticated) {
    alert('You are not allowed to access /about without login')
    next('/')
  } else {
    next()
  }
})

export default router
