import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'
import type { RouteLocationNormalized } from 'vue-router'

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized) => {
  // Redirect from main page to /free-icons
  if (to.path === '/') {
    return navigateTo('/free-icons')
  }
})
