// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/ui'
  ],

  extends: [
    '@nuxt/ui-pro'
  ],

  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },

  tailwindcss: {
    exposeConfig: true
  },

  ui: {
    icons: ['heroicons']
  },

  compatibilityDate: '2025-01-13'
})