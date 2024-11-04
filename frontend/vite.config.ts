import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@modules': path.resolve(__dirname, 'node_modules')
    }
  },
  optimizeDeps: {
    // include: [''],
  },
  plugins: [react()],
})
