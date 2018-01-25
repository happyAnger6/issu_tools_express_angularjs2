var express = require('express');
var router = express.Router();

/* GET teams listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a teams');
});

module.exports = router;
