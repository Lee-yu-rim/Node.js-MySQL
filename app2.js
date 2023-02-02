var express = require('express');
var router = require('routerA');

//서버 생성
var app = express();

app.use('/a', routera.router);

// 서버 실행
app.listen(52273, function(){
    console.log("Server Running at http://127.0.0.1:52273/");
});