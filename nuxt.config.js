import axios from 'axios'
////
const env = require('dotenv').config()

export default {
  mode: 'universal',
  
  router: {
    base: '/',
    middleware: 'siteSettings'
  },
   env: {
    DRAFT_OR_PUBLISHED: process.env.DRAFT_OR_PUBLISHED,
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      process.env.DRAFT_OR_PUBLISHED === 'draft' ? 
      {name: 'robots', content: 'noindex,nofollow'} : {},
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
    'culverin-scss/css-base/base.css',
    //'../culverin-scss/css-base/base.css',
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
    '@nuxtjs/dotenv',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['storyblok-nuxt', 
      {accessToken: process.env.STORYBLOK_TOKEN,
       cacheProvider: 'memory'}
    ],
  ],
  styleResources: {
    scss: ['assets/stylesheets/main.scss']
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
    dir: 'dist',
    routes: async () => {
      let {data} = await axios.get(`https://api.storyblok.com/v1/cdn/stories?filter_query[component][in]=page&token=${process.env.STORYBLOK_ACCESS_TOKEN}`);
        return data.stories.map(story => {
          if (story.name !== 'home') {
            return {
              route: `/${story['full_slug']}`,
              payload: story,
            }
          }
        });
    }
  },
  
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
