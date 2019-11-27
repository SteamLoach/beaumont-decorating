import { CMS } from './cms/cms.config.js';
import { toCase } from './plugins/utils.js';


export default {
  mode: 'universal',
  
  router: {
    base: process.env.DEPLOY_ENV === 'STATIC' ? '/beaumont-decorating/' : '/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato|Montserrat&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/stylesheets/css-base/base.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/masterResolver.js',
    '~/plugins/globalComponents.js',
    '~/plugins/utils.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'kentico-kontent-nuxt-module',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['assets/stylesheets/main.scss']
  },
  kenticokontent: {
    projectId: CMS.KEY,
    enableAdvancedLogging: false,
    //previewApiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    //enablePreviewMode: true,
    //baseUrl: 'https://custom.uri/api/KenticoKontentProxy',
    //securedApiKey: 'xxx',
    //enableSecuredMode: true
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  generate: {
    dir: 'dist'
  },
  
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
