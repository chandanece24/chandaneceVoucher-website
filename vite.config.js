// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React, React-DOM, React-Router → vendor চাঙ্কে
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/react-router-dom/')
          ) {
            return 'vendor';
          }
          // Framer Motion, React Icons → ui চাঙ্কে
          if (
            id.includes('node_modules/framer-motion/') ||
            id.includes('node_modules/react-icons/')
          ) {
            return 'ui';
          }
          // বাকি সব → ডিফল্ট
        },
      },
    },
  },
});