var express = require('express');
var router = express.Router();

/* GET delivers listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a delivers');
});

module.exports = router;
