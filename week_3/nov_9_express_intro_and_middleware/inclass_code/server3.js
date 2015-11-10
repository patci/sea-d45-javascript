var app = require('express')();

app.get('/*', function(req, res) {
  res.json({msg: 'always called'});
});

app.get('/greet/:name', function(req, res) {
  res.json({msg: 'never called'});
});

app.listen(3000, function() {
  console.log('server up');
});
