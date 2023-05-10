## 准备工作

创建文件夹 router
yarn create vite
选择 vue + ts

## 文件夹结构

yarn add vue-router@4

// 路由别名
yarn add -D path

安装类型声明
yarn add -d @types/node

### 自动生成布局路由

```js
// autoload.ts
```

### vite mock.js

使用 vite-plugin-mock 插件
https://www.npmjs.com/package/vite-plugin-mock

```shell
yarn add mock.js
and
yarn add vite-plugin-mock -D

```

### 解决类型声明文件

typeof Record<T extends keyof any, D> = {
[P in T]: D
}

新建一个 Class 对环境变量解析，支持变量类型支持。

### 对接口请求提供类型支持

安装 axios 库

`yarn add axios`

进行插件管理

```ts
;/src/gilnpsu /
  axios /
  class Axios {
    private instance
    constructor() {}
  }
```

增加 tag
1234
