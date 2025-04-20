// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@bootstrap-vue-next/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.min.css', '@/assets/scss/index.scss'],
  alias: {
    '@components': '~/components',
    '@assets': '~/assets',
    '@images': '~/assets/images',
    '@layouts': '~/layouts'
  },
  runtimeConfig: {
    public: {
      iconscoutClientId: process.env.ICONSCOUT_CLIENT_ID || ''
    }
  }
})
