var express = require('express');
var router = express.Router();
router.get('/list', (req, res, next) => {
  res.json({
    code: 200,
    data: [
      {
        name: 'wangbiaoxuan',
        age: 12,
        message: 'i am back',
      },
      {
        name: 'geek',
        age: 13,
        message: 'whatever you end up doing, love it and do it',
      }
    ],
  })
})
router.get('/detail', (req, res, next) => {
  res.json({
    code: 200,
    data: 'detail',
  })
})
module.exports = router;