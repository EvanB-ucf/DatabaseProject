const path = require('path');
const webpack = require('webpack');




/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled MiniCssExtractPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/mini-css-extract-plugin
 *
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');




/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

const TerserPlugin = require('terser-webpack-plugin');




module.exports = {
  mode: 'development',

  entry: {
    main: "./src/index.jsx",
  },

  devServer: {
    open: true,
    port: 3000,
    compress: true,
    overlay: true,
    historyApiFallback: {
      index: 'index.html'
    },
  },

  output: {
    publicPath: "/",
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js",
  },

  plugins: [
    new webpack.ProgressPlugin()
  ],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use:{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      exclude: /node_modules/,
    }, 
    
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  }
}