import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupPlugins } from './plugins'

async function bootstrap() {
  const app = createApp(App)
  // app.use(router)
  setupRouter(app)
  setupPlugins(app)
  await router.isReady() // 路由挂载好了再执行。异步
  app.mount('#app')

}


bootstrap()
