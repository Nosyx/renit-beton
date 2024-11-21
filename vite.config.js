import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Použite len ESM syntax
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/renitbeton/' : '/',
});
