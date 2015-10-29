'use strict';

var Stack = function() {
  var storage = [];
  this.push = storage.push.bind(storage);
  this.pop = storage.pop.bind(storage);
  this.peek = function() {
    return storage[storage.length - 1];
  };
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
debugger;
