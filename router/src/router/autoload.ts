// {
//   path: '/admin'
//   compenent:{}，
//   children[]
// }
/**
 * 自动注册路由
 */

import { RouteRecordRaw } from "vue-router"

const layouts = import.meta.globEager('../layouts/*.vue')
const views = import.meta.globEager('../views/**/*.vue')


function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[]

  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module)
    route.children = getChildrenRoutes(route)
    layoutRoutes.push(route)
  })
  return layoutRoutes
}

function getChildrenRoutes(layoutRoutes: RouteRecordRaw) {
  // console.log(layoutRoutes)
  const routes = [] as RouteRecordRaw[]
  Object.entries(views).forEach(([file, module]) => {
    // console.log(file)
    if (file.includes(`../views/${layoutRoutes.name as string}`)) {
      const route = getRouteByModule(file, module)
      // console.log(route)
      routes.push(route)
    }
  })
  return routes
}
function getRouteByModule(file: string, module: { [key: string]: any }) {
  // console.log(file.split('/').pop()?.split('.')[0]) 或者使用正则表达式进行获取
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
  const route = {
    name: name.replace('/', '.'),
    path: `/${name}`,
    component: module.default
  } as RouteRecordRaw
  return Object.assign(route, module.default?.route)  // 自定义 route /admin/user => /user
  // return route
}

export default getRoutes();