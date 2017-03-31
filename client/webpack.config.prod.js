const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'// this process.env.NODE_ENV is only referenced by node environment

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    vendor: ['vue', 'vuex', 'vue-router'],
    main: './main.js',
  },
  output: {
    publicPath: '/Scripts/',
    path: path.resolve(__dirname, '../Vue4Mac/Scripts'),
    filename: '[name].bundle.js',
  },
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
  resolve: {
    extensions: ['.js', '.jsx', '.vue'],
    alias: {
      // vue: 'vue/dist/vue.js', // only useful when you write <template>
      'muse-components': 'muse-ui/src',
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),

    new ExtractTextPlugin('style.bundle.css'),

    new OptimizeCssAssetsPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'// this line set all references to process.env.NODE_ENV to 'production'
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    })
  ]
}
