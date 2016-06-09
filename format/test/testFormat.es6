'use strict';

const assert = require('assert');
const format = require('../format.es6');

if(!String.prototype.format) {
  String.prototype.format = format;
}

let str;

str = '{}, {}!'.format('Hello', 'world');
assert.equal(str, 'Hello, world!');

str = '{} {}'.format(20, 'bananas');
assert.equal(str, '20 bananas');
