const path = require('path')
const webpack = require('webpack')
const isProduction = process.env.NODE_ENV === 'production'// this process.env.NODE_ENV is only referenced by node environment

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    vendor: ['vue', 'vuex', 'vue-router'],
    main: ['babel-polyfill', './main.js'],
  },
  output: {
    publicPath: '/Scripts/',
    path: path.resolve(__dirname, '../Vue4Mac/Scripts'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', }, // exclude: /node_modules/, since I used muse-ui.src file.
      { test: /\.css$/, loader: 'style-loader!css-loader', },
      { test: /\.vue$/, loader: 'vue-loader', },
      { test: /muse-ui.src.*?js$/, loader: 'babel-loader', },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader', }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue'],
    alias: {
      // vue: 'vue/dist/vue.js', // only useful when you write <template>
      'muse-components': 'muse-ui/src',
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    })
  ],
  devServer: {
    publicPath: '/Scripts/',
    compress: true,
    historyApiFallback: true,
    port: 5566,
  }
}
