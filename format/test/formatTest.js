'use strict';

const assert = require('assert');
const format = require('../format.js');

String.prototype.format = format;

let str;

str = '{}, {}!'.format('Hello', 'world');
assert.equal(str, 'Hello, world!');

str = '{} {}'.format(20, 'bananas');
assert.equal(str, '20 bananas');
