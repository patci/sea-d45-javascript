var expect = require('chai').expect;
var greet = require(__dirname + '/../bin/greet');

describe('greet bin', function() {
  before(function() {
    this.backup = process.argv;
    process.argv = {};
  });

  after(function() {
    process.argv = this.backup;
    debugger;
  });

  it('should greet anonymous', function() {
    debugger;
    expect(greet()).to.eql('hello anonymous');
  });

  describe('with arguments', function() {
    before(function() {
      this.backup = process.argv;
      process.argv = ['node', 'myfile', 'test name'];
    });

    after(function() {
      process.argv = this.backup;
      debugger;
    });

    it('should pull from process.argv', function() {
      expect(greet()).to.eql('hello test name');
    });
  });
});
debugger;
