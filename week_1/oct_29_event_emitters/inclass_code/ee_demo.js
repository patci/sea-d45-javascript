var EE = require('events').EventEmitter;
var fs = require('fs');
var fileEvents = new EE();

fileEvents.on('processdata', function(data) {
  console.log('processdata');
  process.nextTick(function() {
    console.log(data.toString());
  });
});

fileEvents.on('donesomefile', function(data) {
  console.log('donesomefile');
  fs.readFile('anotherfile', function(err, data) {
    if (err) return console.log(err);
    fileEvents.emit('processdata', data);
  });
});

fs.readFile('somefile', function(err, data) {
  console.log('somefile');
  process.nextTick(function() {
    console.log('inside somefile nextTick');
    fileEvents.emit('processdata', new Buffer('from some file callback'));
  });
  process.nextTick(function() {
    fileEvents.emit('donesomefile', data);
  });
  if (err) return console.log(err);
  fileEvents.emit('processdata', data);
});

process.nextTick(function() {
  console.log('inside first nextTick');
  fileEvents.emit('processdata', new Buffer('first next tick'));
});

console.log('first!');
