import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    } /* 알제? */,
  },
  server: {
    watch: {
      ignored: [
        '**/server/**',
      ] /* vite가 해당 폴더를 더이상 감지하지 않음 -> 이로인해 리렌더링이 발생되지 않을거임 */,
    },
  },
});
