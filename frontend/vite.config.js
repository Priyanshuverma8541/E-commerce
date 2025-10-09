import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//   proxy: {
//     '/api': 'https://savitri-jewellers-backend.onrender.com'
//   }
// }
// })
export default defineConfig({
  plugins: [react()],
  server: {
    host:true,
    proxy: {
      '/api': {
        target: 'https://savitri-jewellers-backend.onrender.com',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})

