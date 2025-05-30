// https://nuxt.com/docs/api/configuration/nuxt-config
import Theme from "./themes/default"

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es',
      },
      script: [
        {
          src: 'https://analytics.ahrefs.com/analytics.js',
          'data-key': 'DwX/03JbSINND6A5bandzw',
          async: true
        }
      ]
    }
  },
  typescript: {
    typeCheck: true,
    strict: true
  },
  extends: [
    //['github:red-plug/layers-nutrix', { auth: process.env.GITHUB_TOKEN }]
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/fonts',
    'nuxt-aos',
    '@nuxt/image'
  ],
  primevue: {
    options: {
      theme: {
        preset: Theme,
        options: {
          darkModeSelector: '.dark-mode',
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
          }
        }
      },
      ripple: true,
    },
  },
  colorMode: {

  },
  runtimeConfig: {
    serverToken: process.env.SERVER_TOKEN,
    public: {
      apiBase: process.env.API_URL
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/_ipx/_/images/natural-1.webp',
        '/_ipx/_/images/business-casual-1.webp',
        '/_ipx/_/images/elegant-1.webp',
        '/_ipx/_/images/romantic-1.webp',
        '/_ipx/_/images/seductor-1.webp',
        '/_ipx/_/images/drama-1.webp',
        '/_ipx/_/images/creative-1.webp',
      ]
    }
  }
})