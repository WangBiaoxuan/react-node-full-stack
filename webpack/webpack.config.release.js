const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    common: ['react', 'react-router', 'antd-mobile', 'moment', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js',
  },
  devtool: 'cheap-module-source-map',
  module: {    
    loaders: [
      {    
        test: /\.(js|jsx)$/,    
        exclude: /node_modules/,
        loader: 'babel-loader'    
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ]    
  }, 
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      inject: true,
      favicon: './src/favicon.ico',
      template: './src/index.html',
      filename: 'index.html',
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons.[chunkhash:8].js",
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: true
    }),
    new webpack.DefinePlugin({
      'process.env.SCM_ENV': JSON.stringify('_PD_'),
      'process.env.CURRENT_VERSION_TIME': JSON.stringify(require('moment')().format('YYYY-MM-DD HH:mm:ss')),
    }),
  ],
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
  }
};