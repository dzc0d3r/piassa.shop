import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    //sourcemap: process.env.NODE_ENV === 'production',
    sourcemap: true,
  },
})
