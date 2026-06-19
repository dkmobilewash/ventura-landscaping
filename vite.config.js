import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Bundle react-helmet-async into the SSR build. It ships as CommonJS, so
  // leaving it external breaks named imports under Node's ESM loader during
  // prerendering.
  ssr: {
    noExternal: ['react-helmet-async'],
  },
});
