var express = require('express');

//서버 생성
var app = express();

//기본 미들웨어  http://127.0.0.1:52273
app.use(function(request, response){
    response.writeHead(200, { 'Content-Type':'text/html' });
    response.end('<h1>Hello express</h1>');
});

//서버 실행
app.listen(52273,function(){
    console.log("Server Running at http://127.0.0.1:52273");
})