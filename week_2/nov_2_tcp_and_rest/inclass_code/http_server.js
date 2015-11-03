var http = require('http');

var server = http.createServer(function(req, res) {
  req.on('data', function(data) {
    console.log(data.toString());
    res.end();
  });
});

server.listen(3000, function() {
  console.log('server up');
});
