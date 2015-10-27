var transform = function(input) {
  input.x = input.x + 2;
  return input;
};

var transform2 = function(input) {
  input = {x: input.x + 2};
  return input;
};

var transform3 = function(input) {
  input = {x: input.x++};
  return input;
};

var transform4 = function(input) {
  input = {x: input.x};
  input.x++;
  return input;
};


var myVar = {x: 0};

console.log('before: ' + myVar.x);
console.log('transform result: ' + transform(myVar).x);
console.log('after: ' + myVar.x);

console.log('before: ' + myVar.x);
console.log('transform2 result: ' + transform2(myVar).x);
console.log('after: ' + myVar.x);

console.log('before: ' + myVar.x);
console.log('transform3 result: ' + transform3(myVar).x);
console.log('after: ' + myVar.x);

console.log('before: ' + myVar.x);
console.log('transform4 result: ' + transform4(myVar).x);
console.log('after: ' + myVar.x);
