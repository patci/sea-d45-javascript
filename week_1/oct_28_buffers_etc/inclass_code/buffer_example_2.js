var fs = require('fs');

process.nextTick(function() {console.log('sync call: ' + fs.readFileSync('./somefile').toString())});
process.nextTick(function() {
  fs.readFile('somefile', function(err, data) {
    if (err) return console.log(err);
    console.log(data.toString());
    process.nextTick(function() {
      console.log('inside fs read');
    });
  });
});

process.nextTick(function() {
  console.log('first nextTick');
  process.nextTick(function() {
    console.log('inner nextTick');
  });
  setTimeout(function() {
    console.log('last');
  }, 1000);
});

process.nextTick(function() {
  console.log('second nextTick');
});

process.nextTick(function() {
  console.log('last nextTick');
});

console.log('hello from console');
console.log('another console log');
