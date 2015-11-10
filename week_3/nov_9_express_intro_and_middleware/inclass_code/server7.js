var express = require('express');
var app = express();

var myRouter = express.Router();

myRouter.use(function(req, res, next) {
  console.log(req.method + ': ' + req.url);
  next();
});	

myRouter.get('/router', function(req, res) {
  res.send('hello from router');
});

app.get('/router', function(req, res) {
  res.send('hello from app');
});

app.use('/myrouter', myRouter);

app.use(function(req, res) {
  res.status(404).send('not found');
});

app.listen(3000, function() {
  console.log('server up');
});
