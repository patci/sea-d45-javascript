var app = require('express')();

var processData = function(req, res, next) {
  console.log('process data');
  var data = '';
  req.on('data', function(reqData) {
    
    data = data + reqData.toString();
  });
  req.on('end', function(endData) {
    req.body = data;
    next();
  });
};

app.get('/dataroute', function(req, res, next) {
  console.log('get to data route');
  next();
});


app.use(processData);

app.get('/dataroute', function(req, res) {
  console.log('send data route');
  res.send(req.body);
});

app.get('/serverroute', function(req, res) {
  res.send('thanks for the data!');
  console.log(req.body);
});

app.listen(3000, function() {
  console.log('server up');
});
