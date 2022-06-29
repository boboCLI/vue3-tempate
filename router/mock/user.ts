import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        data: {
          name: 'doudou',
          age: 18,
          avatar: '/avatar/xx.jpg'
        },
      }
    },
  }
] as MockMethod[]