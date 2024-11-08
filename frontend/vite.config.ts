import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@modules': path.resolve(__dirname, 'node_modules')
    }
  },
  plugins: [react()],
  define: { 'process.env': process.env }
})
