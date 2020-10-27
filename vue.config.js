module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'views': '@/views',
        'components': '@/components',
        'api': '@/api',
        'common': '@/common',
        'assets': '@/assets',
      }
    }
  }
}