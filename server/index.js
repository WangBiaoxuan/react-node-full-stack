var express = require('express')
var app = express();
var router = require('./router');


router(app)
app.listen(3001, function() {
  console.log('服务启动啦')
})