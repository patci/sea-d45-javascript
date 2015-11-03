var net = require('net');

var server = net.createServer(function(socket) {
  socket.pipe(process.stdout);
});

server.listen('3000', function() {
  console.log('server up');
});
