/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ], // 提取文件中使用的类，进行打包
  theme: {
    extend: {},
  },
  plugins: [],
}
