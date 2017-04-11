const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'// this process.env.NODE_ENV is only referenced by node environment
const isNodeServer = process.env.SERVER_ENV === 'node'
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge(require('./webpack.config.common.js'), {
  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        })
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            }),
            less: ExtractTextPlugin.extract({
              // since muse-ui is using less.
              use: 'css-loader!less-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      { test: /muse-ui.src.*?js$/, loader: 'babel-loader', },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
        })
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),

    new ExtractTextPlugin({
      filename: 'style.bundle.css',
      allChunks: true,// make sure lazy load components extract css
    }),

    new OptimizeCssAssetsPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'// this line set all references to process.env.NODE_ENV to 'production'
      }
    }),

    new HTMLWebpackPlugin({
      template: './index.ejs',
      filename: path.resolve(__dirname, './index.html'),
    })
  ]
})
