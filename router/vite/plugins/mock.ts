import { viteMockServe } from 'vite-plugin-mock'
export function setupMockPlugin(isBuild: Boolean) {
  return viteMockServe({
    mockPath: 'mock', // mock 数据存放的文件路径
    localEnabled: !isBuild, // 非编译环境开启
  })
}