import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    fs: {
      // allow serving files from one level up (the original HTML/CSS files)
      allow: [path.resolve(__dirname, '..')]
    }
  },
  // allow importing .html files with ?raw
  assetsInclude: ['**/*.html']
})
