// webpack.config.js
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
module.exports = {
  // entry point of our application
  entry: './pinboard.js',
  // where to place the compiled bundle
  output: {
    path: './',
    publicPath: './',
    filename: 'pinboard.min.js'
  },
  module: {
    // `loaders` is an array of loaders to use.
    // here we are only configuring vue-loader
    loaders: [
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue-loader'   // loader to use for matched files
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
      test: /\.[sa|sc|c]ss$/,
      loader: "style!css!sass"
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader?outputPath=../img/search/&publicPath=../img/search/'
      },
      { test: /\.json$/, 
        include: /node_modules/,
        loader: 'json-loader' }
    ],
    noParse: /dist\/ol.js/,
  },
vue: {
  loaders: {
    scss: 'style!css!sass'
  }},

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      inject: false,
      hash: true,
      filename: './index.html',
      template: './index.webpack'
    }),
    //new webpack.optimize.DedupePlugin(),
    //new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]

}
