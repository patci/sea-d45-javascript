'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');
var greet2 = require(__dirname + '/../lib/greet_2');

describe('the greet function', function() {
  it('should return hello world', function() {
    expect(greet()).to.eql('hello world');
  });

  it('should solve all the world\'s problems');
});

describe('the greet 2 object', function() {
  it('should greet someone by name', function() {
    expect(greet2.greet('test')).to.eql('hello test');
  });

  it('should do some stuff', function() {
    throw new Error('what will happen?');
  });
});
