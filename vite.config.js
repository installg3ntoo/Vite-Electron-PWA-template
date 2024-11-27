import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    VitePWA({
      registerType: 'prompt',
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: pkg.productName,
        short_name: pkg.shortName,
        description: pkg.description,
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        display_override: ['window-controls-overlay'],
        lang: 'es-ES',
        start_url: '.',
        scope: '.',
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        maximumFileSizeToCacheInBytes: 30000000,
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
      devOptions: {
        enabled: false,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    }),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(
          /<title>(.*?)<\/title>/,
          `<title>${pkg.productName}</title>`,
        )
      }
    },
  ],
  resolve: {
    alias: {
      src: '/src',
      '@customhooks': '/src/hooks',
      '@assets': '/src/assets',
      '@pages': '/src/pages',
      '@routes': '/src/routes',
      '@imgs': '/public/images',
      '@components': '/src/components',
    },
  },
})

