import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  proxy: {
    '/api': 'http://localhost:5000',
    '/auth/google': 'http://localhost:5000',
  },
});
