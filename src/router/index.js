import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { servicesData } from '../data/services'

// Exclure le BTP car il a une page dédiée immersive
const standardServices = servicesData.filter(s => s.slug !== 'batiment-et-travaux-publics')

// Générer les routes dynamiquement basées sur les slugs des services standards
const serviceRoutes = standardServices.map(service => ({
  path: `/${service.slug}`,
  name: `service-${service.id}`,
  component: () => import('../views/ServiceDetailView.vue')
}))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/batiment-et-travaux-publics',
      name: 'service-btp',
      component: () => import('../views/BtpServiceView.vue')
    },
    {
      path: '/qui-sommes-nous',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    // Ajout des routes de services individuels
    ...serviceRoutes
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
