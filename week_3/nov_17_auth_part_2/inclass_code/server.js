var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bearsRouter = require(__dirname + '/routes/bears_routes');
var authRouter = require(__dirname + '/routes/auth_routes');
process.env.APP_SECRET = process.env.APP_SECRET || 'changemechangemechangeme';

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/bear_stream_dev');

app.use('/api', bearsRouter);
app.use('/api', authRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('server up');
});
