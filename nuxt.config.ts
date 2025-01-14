export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/color-mode'
  ],
  ui: {
    icons: ['heroicons']
  },
  tailwindcss: {
    exposeConfig: true
  },
  colorMode: {
    classSuffix: ''
  },
  compatibilityDate: '2025-01-13'
})