import { create } from 'domain'
import { App } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import layoutRoutes from './autoload'
import routes from './routers'

const router = createRouter({
  history: createWebHistory(),  // createWebHashHistory()
  routes: [...routes, ...layoutRoutes]
})

export function setupRouter(app: App) {
  app.use(router)
}

export default router;