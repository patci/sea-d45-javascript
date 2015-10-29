var expect = require('chai').expect;
var fs = require('fs');

describe('an async test', function() {
  it('should timeout', function(done) {

  });

  it('should test async', function(unicorns) {
    fs.readFile(__dirname + '/test', function(err, data) {
      expect(err).to.eql(null);
      expect(data.toString()).to.eql('test\n');
      unicorns();
      throw new Error('new error');
    });
  });
});
