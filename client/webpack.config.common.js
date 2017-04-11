const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const isNodeServer = process.env.SERVER === 'node'
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    vendor: ['vue', 'vuex', 'vue-router'],
    main: ['babel-polyfill', './main.js'],
  },

  output: {
    publicPath: isNodeServer ? '/dist/' : '/Scripts/',
    path: path.resolve(__dirname, isNodeServer ? './dist' : '../Vue4Mac/Scripts'),
    filename: isProduction ? '[name].bundle.[chunkhash].js' : '[name].bundle.js',
    chunkFilename: isProduction ? '[name].bundle.[chunkhash].js' : '[name].bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.vue'],
    alias: {
      // vue: 'vue/dist/vue.js', // only useful when you write <template>
      'muse-components': 'muse-ui/src',
    }
  },

  plugins: [
    new CleanWebpackPlugin(['./dist']),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],// add manifest to fix chunkhash bug in webpack.
      minChunks: Infinity,
    }),
  ],
}
