import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
        // changeOrigin: true,
        // secure: false,
        // ws: true,
      },
      '/auth/google': {
        target: 'http://localhost:5000'
        // changeOrigin: true,
        // secure: false,
        // ws: true,
      }
    }
  }
});
