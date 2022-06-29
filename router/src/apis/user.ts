import { http } from "@/plugins/axios";
interface User {
  name: string,
  age: number,
  avatar: string
}
export async function info() {
  return http.request<User>({
    url: 'info'
  })
}



/**
 * 多个API管理 class
 */

// class userApi {
//   info() {
//     return http.request({
//       url: '/info'
//     })
//   }
//   login() {
//     return http.request({
//       url: '/login'
//     })
//   }
// }

// export default new userApi()