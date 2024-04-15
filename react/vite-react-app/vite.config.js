import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 指定dev sever的端口号，默认为5173
    port: 3000,
    // 自动打开浏览器运行以下页面(http://localhost:3000/)
    open: '/'
  },
  resolve: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
    }
  }
})
