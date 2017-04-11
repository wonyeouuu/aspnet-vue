const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'// this process.env.NODE_ENV is only referenced by node environment
const isNodeServer = process.env.SERVER === 'node'
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge(require('./webpack.config.common.js'), {
  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', }, // exclude: /node_modules/, since I used muse-ui.src file.
      { test: /\.css$/, loader: 'style-loader!css-loader', },
      { test: /\.vue$/, loader: 'vue-loader', },
      { test: /muse-ui.src.*?js$/, loader: 'babel-loader', },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader', }
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './index.ejs',
      filename: path.resolve(__dirname, './index.html'),
    })
  ],

  devServer: {
    publicPath: isNodeServer ? '/dist' : '/Scripts',
    compress: true,
    historyApiFallback: true,
    port: 5566,
  }
})
