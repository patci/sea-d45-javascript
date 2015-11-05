var Router = require(__dirname + '/lib/router');
var http = require('http');

var myRouter = new Router();
myRouter.get('/awesome', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('wow, so awesome, such router');
  res.end();
});

http.createServer(function(req, res) {
    myRouter.route(req, res);
  }).listen(3000, function() {
    console.log('server up');
});
