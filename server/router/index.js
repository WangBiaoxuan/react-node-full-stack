var express = require('express')
var home = require('./home')
var product = require('./product')
// var router = express.Router();

const index = (app) => {
  app.use('/home', home)
  app.use('/product', product)
}


module.exports = index;