var express = require('express');
var router = express.Router();

/* GET modules listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a modules');
});

module.exports = router;
