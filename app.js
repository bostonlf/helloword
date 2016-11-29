//express_demo.js 文件
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello Worldddddddddddddddddddddddddd');
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("myhellowordweb http://%s:%s", host, port)

})