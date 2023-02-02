var express = require('express'); // 모듈 선언

var app = express(); // 모듈 생성

// 기본 미들 웨어
app.use(function(request, response){
    var output = [];
    for(var i=0; i < 3; i++){
        output.push({
            count: i, 
            name: 'name - ' + i}); // push -> 스크립트에서 배열에 값을 넣을 때 사용
    }
    response.send(output);
});

// 서버 실행
app.listen(52273, function(){
    console.log("Server Running at http://127.0.0.1:52273/");
});