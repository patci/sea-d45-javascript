'use strict';

var Greet = module.exports = exports = function() {
  this.greeting = 'hello world';
};

Greet.prototype.greet = function() {
  return this.greeting;
};
