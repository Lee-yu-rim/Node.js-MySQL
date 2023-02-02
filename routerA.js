var express = require('express');

var router = express.Router();

routerA.get('/index', function(request, response){
    response.send('<h1>routerA index Page</h1>');
});

exports.router = router;