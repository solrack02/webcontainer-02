
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        'react-native': 'react-native-web'
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    server: {
      hmr: true,
      watch: {
        usePolling: true,
      },
    },
  });
