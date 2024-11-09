import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local',
    },
    preprocessorOptions: {
      scss: {
        additionalData: [
          '@use "@/styles/_variables.scss" as *;',
          '@use "@/styles/_mixins.scss" as *;',
        ].join('\n'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
