import axios from '@nuxtjs/axios'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  serverMiddleware: [
    { path: '/api/', handler: '~/api/index.js' },
    { path: '/api/pickup/', handler: '~/api/pickup.js' },
    { path: '/api/pickup/comic', handler: '~/api/comicPickup.js' },
    { path: '/api/pickup/programming', handler: '~/api/programmingPickup.js' },
    { path: '/api/pickup/design', handler: '~/api/designPickup.js' },
  ],
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/css/style.scss', 'swiper/css/swiper.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/vue-awesome-swiper'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],
  styleResources: {
    scss: ['~assets/css/variables.scss'],
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
