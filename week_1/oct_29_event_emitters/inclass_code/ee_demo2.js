var EE = require('events').EventEmitter;
var inherits = require('util').inherits;

var MyConstructor = function() {
  this.awesome = true;

  this.on('unicorns', function() {
    console.log('unicorns!');
    return this.awesome;
  });
};

inherits(MyConstructor, EE);

MyConstructor.prototype.something = function() {
  this.emit('unicorns');
};

var myObj = new MyConstructor();
debugger;
myObj.something();
