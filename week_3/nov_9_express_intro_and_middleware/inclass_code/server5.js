var app = require('express')();

app.get('/first_route', function(req, res, next) {
  console.log('another get');
  next();
});

app.get('/first_route*', function(req, res, next) {
  console.log('first route star');
  next();
});

app.get('/first_route*', function(req, res, next) {
  console.log('first middleware');
  req.message = 'first middleware msg';
  next();
},
function(req, res, next) {
  console.log('second middleware');
  console.log(req.message);
  req.message = 'second middleware msg';
  next();
}, function(req, res, next) {
  console.log('third middleware');
  res.send(req.message);
});

app.get('/first_route/:something', function(req, res) {
  res.send('route with a param ' + req.params.something);
});

app.listen(3000, function() {
  console.log('server up');
});
