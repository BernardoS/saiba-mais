import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    host: true, // Ensure the server is accessible externally
    proxy: {
      '/posts': {
        target: 'http://localhost:3000', // Keep the internal port as 3000
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/posts/, '/posts')
      }
    }
  }
}) 