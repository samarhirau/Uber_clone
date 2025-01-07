import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      css: {
        charset: false,
      },
    },
  },
  plugins: [react()],
})
