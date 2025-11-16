import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Set base to the repository name so built assets load correctly
  // when deployed to GitHub Pages at https://<user>.github.io/Portfolio_Manthan/
  base: '/Portfolio_Manthan/',
  plugins: [react(), tailwindcss()],
})
