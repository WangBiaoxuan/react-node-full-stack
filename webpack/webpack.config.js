const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: 'eval-inline-source-map',
  module: {    
    loaders: [{    
        test: /\.(js|jsx)$/,    
        exclude: /node_modules/,
        loader: 'babel-loader'    
    }]    
  }, 
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      inject: true,
      favicon: './src/favicon.ico',
      template: './src/index.html',
      filename: 'index.html',
    })
  ],
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
  }
};