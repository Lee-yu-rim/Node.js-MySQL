var mysql = require('mysql');
var fs = require('fs');
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');

var client = mysql.createConnection({
    //host:'localhost',
    user:'root',
    password:'1234',
    database:'company'
});

var app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(request, response){
    fs.readFile('list.html','utf-8',function(error,data){
        client.query('select * from products',function(error,results){
            response.send(ejs.render(data,{data:results}));
        });
    });
});

app.get('/delete/:id', function(request, response){
    client.query('delete from products where id=?',[request.params.id],function(){
        response.redirect('/');
    });
});
//물음표 값 뒤에는 []로 값 지정

app.get('/insert', function(request, response){
    fs.readFile('insert.html','utf-8',function(error,data){
        response.send(data);
    });
});

app.post('/insert', function(request, response){
    var body = request.body;

    client.query('insert into products(name, modelnumber,series) values (?,?,?)', [body.name, body.modelnumber, body.series], function(){
        response.redirect('/');
    });
});

app.get('/edit/:id', function(request, response){ 
    fs.readFile('edit.html','utf-8',function(error,data){
        client.query('select * from products where id= ?', [request.params.id], function(error,result){
            response.send(ejs.render(data,{data:result[0]}));
        });
    });
});

app.post('/edit/:id', function(request, response){
    var body = request.body;

    client.query('update products set name = ?, modelnumber = ?, series = ? where id = ?', [body.name, body.modelnumber, body.series, request.params.id], 
    function(){
        response.redirect('/');
    });
});

app.listen(52273, function(){
    console.log("Server Running at http://127.0.0.1:52273");
});

//client.query('USE company');

//client.query('select * from products',function(error, result, fields){
//    if(error){
//        console.log('쿼리문 실행 오류');
//    }else{
//        console.log(result);
//    }
//});

//client.query('insert into products(name, modelnumber, series) values (?,?,?)',[
//    'Name Value', '01011111111', 'Series Value'
//], function(error, results, fields) {
//
//});

//update, delete 안될 때 > mysql에서 safe 모드 해제해주기