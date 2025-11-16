import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Base path for GitHub Pages (repo name)
  base: '/Portfolio_Manthan/',
  plugins: [react(), tailwindcss()],
})
