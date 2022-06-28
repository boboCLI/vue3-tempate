/**
 * @description ts 类型声明文件 vite 环境变量类型
 */
// https://vitejs.cn/guide/env-and-mode.html#intellisense TypeScript 的智能提示
interface ViteEnv {
  VITE_SOME_KEY: number
  VITE_ROUTE_AUTOLOAD: boolean
  VITE_API_URL: string
}

interface ImportMetaEnv extends ViteEnv { }

interface ImportMeta {
  readonly env: ImportMetaEnv
}