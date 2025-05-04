import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        namdokmai: resolve(__dirname, 'namdokmai.html'),
        khieosawoei: resolve(__dirname, 'khieosawoei.html'),
        okrhongdamnoen: resolve(__dirname, 'okrhongdamnoen.html'),
        raedpaet: resolve(__dirname, 'raedpaet.html'),
        tongdam: resolve(__dirname, 'tongdam.html'),
        quiz: resolve(__dirname, 'quiz.html'),
        mangopersecond: resolve(__dirname, 'mangopersecond.html')
      }
    }
  }
})
