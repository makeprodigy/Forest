import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // PostCSS is automatically detected from postcss.config.js
    // Tailwind CSS and Autoprefixer will be processed here
  },
  server: {
    // Enable HMR for better development experience
    hmr: true,
  },
  build: {
    // Optimize build output
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
