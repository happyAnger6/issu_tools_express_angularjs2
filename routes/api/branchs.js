var express = require('express');
var router = express.Router();

/* GET branchs listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a branchs');
});

module.exports = router;
