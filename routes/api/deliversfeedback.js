var express = require('express');
var router = express.Router();

/* GET deliversfeedback listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a deliversfeedback');
});

module.exports = router;
