module.exports = {
  router: {
    base: '/upf/newmedia/ubrandstudio/'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'U Brand Studio 融媒體 用創新說故事 - UDN聯合報',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },     
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'article:author', content: 'https://www.facebook.com/udnplus' },
      { property: 'article:publisher', content: 'https://www.facebook.com/udnplus' },
      { name: 'copyright', content: '聯合報' },
      { name: 'application-name', content: 'U Brand Studio 融媒體 - UDN聯合報' },
      { hid: 'description', name: 'description', content: 'U Brand Studio 融媒體，探索創新的內容閱讀體驗，讓讀者更淺顯易懂的看懂新聞議題。最擅長:品牌故事行銷、共同倡議專題。為您說好故事，讓品牌更有影響力。' },
      { property: 'og:site_name', content: 'U Brand Studio 融媒體 - UDN聯合報' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://udn.com/upf/newmedia/ubrandstudio/FB.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://udn.com/upf/newmedia/image/udn-icon.ico' },
      { rel: 'stylesheet', href: 'https://udn.com/upf/newmedia/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://udn.com/upf/newmedia/css/font-awesome.min.css' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#e73828' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['@nuxtjs/google-analytics']    
  ],

  'google-analytics': { 
    id: 'UA-92344807-2'
  }
}
