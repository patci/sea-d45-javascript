var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(fs.readFileSync(__dirname + '/public/index.html'));
    return res.end();
  }

  if (req.url === '/awesome/style.css') {
    res.writeHead(200, {
      'Content-Type': 'text/css'
    });
    res.write(fs.readFileSync(__dirname + '/public/awesome_style.css'));
    return res.end();
  }

  res.writeHead(404, {
    'Content-Type': 'text/plain'
  }); 
  res.write('not found');
  res.end();
}).listen(3000, function() {
  console.log('server up');
});
