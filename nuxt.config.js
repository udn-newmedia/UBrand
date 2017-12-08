module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ubrand',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ubrand site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://udn.com/upf/newmedia/image/udn-icon.ico' },
      { rel: 'stylesheet', href: 'https://udn.com/upf/newmedia/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://udn.com/upf/newmedia/css/font-awesome.min.css' }

    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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
  }
}
