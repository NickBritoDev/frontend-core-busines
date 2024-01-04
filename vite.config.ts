import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  server: {
    host: true,
    port: 3000,
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      layouts: path.resolve(__dirname, './src/layouts'),
      pages: path.resolve(__dirname, './src/pages'),
      assets: path.resolve(__dirname, './src/assets'),
      services: path.resolve(__dirname, './src/services')
    }
  },
  esbuild: {
    loader: 'tsx',
    include: [
      'src/**/*.tsx',
      'node_modules/**/*.tsx',
      'src/**/*.ts',
      'node_modules/**/*.ts'

    ],
    exclude: ['node_modules']
  }
})