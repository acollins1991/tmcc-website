const axios = require('axios')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    bodyAttrs: {
      style: 'opacity:0;'
    },
    title: 'tmcc-v2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i|Montserrat:400,700' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#5031a9' },
  /*
   ** CSS or SCSS
   */
  css: ['@/assets/app.scss'],
  /*
   ** Plugins
   */
  plugins: [
      {src: '~/plugins/firstLoad.js', ssr: false},
     { src: '~/plugins/uikit.js', ssr: false }
  ],
  /*
   ** Modules
   */
  /*
  ** Build configuration
  */
  mode: 'spa',
  // Generate post urls
  generate: {
    routes: function () {
      return axios.get('https://themarketingcampaigncompany.co.uk/wp-json/wp/v2/posts?per_page=100')
        .then((response) => {
           return response.data.map(post => {
            return {
              route: '/blog/' + post.slug,
              payload: post
            }
          })
        })
    }
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
