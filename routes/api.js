var express = require('express');
var router = express.Router();

//api router begin

var api_endpoints = ['users', 'teams', 'branchs', 'modules', 'delivers', 'deliversfeedback'];
api_endpoints.forEach(function (endpoint) {
    var api_router = require('./api/'+ endpoint);
    router.use('/'+endpoint, api_router);
});

module.exports = router;