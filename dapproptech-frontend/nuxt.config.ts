// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future:
  {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2026-01-14',
  devtools: { enabled: true },
  tailwindcss: { viewer: true },
  modules: ['@nuxt/image', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ui: 
  {
    safelistColors: ['accent'] 
  }
})
