import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt-firebase',
    title: 'nuxt-firebase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://firebase.nuxtjs.org/guide/getting-started
    '@nuxtjs/firebase',
  ],

  // render: {
  //   bundleRenderer: {
  //     runInNewContext: false
  //   }
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // firebase configuration
  firebase: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY, // "AIzaSyAYxb9bN7kUlYc-yfhjQ5vq6rhephAiO8U",
      authDomain: "test-nuxt-firebase-805b0.firebaseapp.com",
      projectId: "test-nuxt-firebase-805b0",
      storageBucket: "test-nuxt-firebase-805b0.appspot.com",
      messagingSenderId: "456279974998",
      appId: "1:456279974998:web:faa14c29eb07d1f07487f7",
      // measurementId: process.env.measurementId
      databaseURL: 'https://test-nuxt-firebase-805b0-default-rtdb.europe-west1.firebasedatabase.app'
    },
    services: {
      // auth: true,
      // firestore: true,
      // functions: true,
      // storage: true,
      database: true,
      // messaging: true,
      // performance: true,
      // analytics: true,
      // remoteConfig: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

}
