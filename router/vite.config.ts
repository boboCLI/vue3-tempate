import { ConfigEnv, loadEnv } from 'vite'
import alias from './vite/alias'
import { parseEnv } from './vite/utils'
import setupPlugins from './vite/plugins'
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias
//   }
// })

export default ({ command, mode }: ConfigEnv) => {
  // console.log(command)

  const isBuild = command === 'build'
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))
  console.log(env)
  return {
    // plugins: [vue()],
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias
    }
  }
}
