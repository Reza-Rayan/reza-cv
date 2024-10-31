import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    injectRegister: false,
    includeAssets: ["favicon.png", "apple-touch-icon.jpg", "favicon.png"],
    pwaAssets: {
      disabled: false,
      config: true,
    },
    manifest: {
      name: 'Reza HZ',
      short_name: 'Reza HZ',
      description: 'This is a personal website && PWA',
      theme_color: '#212121',
      icons:[
        {
          src: '/favicon.png',
          type: "image/png",
        },
        {
          src: '/apple-touch-icon.jpg',
          type: "image/jpg",
        },

      ]
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^index.html$/],
      type: 'module',
    },
  })],
})
