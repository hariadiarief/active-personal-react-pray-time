
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src' // Set the alias to the root of your "src" directory
    }
  },
  server: {
    open: true, 
    port: 3000, 
  },
})
