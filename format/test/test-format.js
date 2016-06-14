'use strict';

const expect = require('chai').expect;

String.prototype.format = require('../format.js');

describe('format() test', function() {
  it('should work with one argument', function() {
    expect('{}'.format('hello')).to.equal('hello');
  });
  it('should work with 2 arguments', function() {
    expect('{} {}'.format('hello', 'world')).to.equal('hello world');
  });
  it('should not change the string if there are no curly braces', function() {
    expect('don\'t alter'.format('hello', 'world')).to.equal('don\'t alter');
  });
  it('should work with number arguments', function() {
    expect('{} + {} = {}'.format(1, 2, 3)).to.equal('1 + 2 = 3');
  });
});
