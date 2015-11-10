var app = require('express')();

app.get('/greet/:name', function(req, res) {
  res.json({msg: 'hello ' + req.params.name});
});

app.get('/greet/:first_name/:last_name', function(req, res) {
  res.json({msg: 'hello ' + req.params.first_name + ' ' + req.params.last_name});
});

app.get('/greet', function(req, res) {
  res.json({msg: 'hello world'});
});

app.get('/*', function(req, res) {
  res.status(404).json({msg: 'not found'});
});

app.listen(3000, function() {
  console.log('server up');
});
