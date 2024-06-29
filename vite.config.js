// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/july-date-program/', // Assurez-vous que ce chemin correspond à votre projet
  build: {
    outDir: 'dist', // Le dossier où les fichiers seront générés
  },
});
