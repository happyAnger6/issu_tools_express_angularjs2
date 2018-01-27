exports.logHandler = function(err, req, res, next) {
    if (err) console.log(err);
    next(err);
};

exports.notFoundHandler = function (err, req, res, next) {
    if (err) {
        next(err);
    }
    else {
        var err = new Error('Not Found');
        err.status = 404;
        res.status(404).format({
            html: function () {
               res.render('404');
            },
            json: function() {
                res.send({ message: 'Resource not found.'})
            }
        });
    }
};

exports.jsonHandler = function(err, req, res, next) {
    res.status(500).json(err);
};