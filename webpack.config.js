const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const dev= process.env.NODE_ENV === "dev"

let config = {
  entry: './assets/js/app.js',
  watch : dev,
  output: {
  	path : path.resolve('./dist'),
    filename: 'bundle.js'    
  },
  devtool: dev ? "cheap-module-eval-source-map" : "source-map"

  module: {
      rules:[
         {
         	test: /\.js$/,
         	exclude: /(node_modules|bower_components)/,
         	use: ['babel-loader']
         }
      ]
  },

  plugins: []
}

if (dev !== 'dev'){
   config.plugins.push(new UglifyJSPlugin(
                {sourceMap:true}
   	))
}

module.exports = config