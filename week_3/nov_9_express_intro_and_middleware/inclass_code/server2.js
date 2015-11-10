var app = require('express')();

app.get('/greet/:name', function(req, res) {
  res.json({msg: 'hello ' + req.params.name});
});

app.listen(3000, function() {
  console.log('server up');
});
