var express = require('express');
var app = express();
var http = require('http');

app.get('/something', function(req, res) {
  res.json({msg: 'wow such awesome'});
});

var server = http.createServer(app);
server.listen(3000, function() {
  console.log('server up');
});
