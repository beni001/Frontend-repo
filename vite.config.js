import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // set base to '/' for production and '/<REPO>/' for development
  const base = mode === 'production' ? '/' : '/<REPO>/'
  return {
    base,
    plugins: [react()],
  }
})

