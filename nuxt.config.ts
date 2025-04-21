// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@bootstrap-vue-next/nuxt', 'nuxt-svgo'],
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
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow' }
      ]
    }
  },
  svgo: {
    defaultImport: 'component', // 'component', 'url', 'raw' lub 'sprite'
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              // włączamy lub wyłączamy konkretne optymalizacje
              removeViewBox: false
            }
          }
        }
      ]
    }
  }
})
