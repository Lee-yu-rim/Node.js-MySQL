var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next){
    response.render('product',{title: 'Product Page'});
})

module.exports = router;