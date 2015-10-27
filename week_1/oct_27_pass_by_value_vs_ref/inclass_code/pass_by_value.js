var transform = function(input) {
  input = input + 2; 
  return input;
};

var x = 0;
console.log('x before: ' + x);
console.log('transform result: ' + transform(x));
console.log('x after: ' + x);
var strX = 'wow such string ';
console.log('strX before: ' + strX);
console.log('transform result: ' + transform(strX));
console.log('strX after: ' + strX);
