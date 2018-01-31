const webpack = require('webpack');
const express = require('express');
const webpackDevMiddlerWare = require('webpack-dev-middleware');
const proxy = require('http-proxy-middleware');

const devServer = express();
const config = require('./webpack.config');
const compiler = webpack(config);

devServer.use('/home/**', proxy({target: 'http://localhost:3001'}))

devServer.use(webpackDevMiddlerWare(compiler, {

}))

devServer.listen(3000, () => {console.log('Example app listening on port 3000!\n');})
