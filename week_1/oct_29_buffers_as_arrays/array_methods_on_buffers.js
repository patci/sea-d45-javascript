var buf = new Buffer('hello world');
Array.prototype.forEach.call(buf, function(byte, index) {
  buf.writeUInt8(255 - byte, index);
});

console.log(buf.toString());
