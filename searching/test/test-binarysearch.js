'use strict';

const expect = require('chai').expect;
const binarySearch = require('../binary-search.js');

describe('Binary search algorithm', function() {
  it('should return -1 if elem does not exist', function() {
    let arr = [1, 2, 3, 4];
    expect(binarySearch(arr, 5)).to.equal(-1);
  });
  it('should return -1 for empty array', function() {
    let arr = [];
    expect(binarySearch(arr, 4)).to.equal(-1);
  });
  it('should return 0 for first elem', function() {
    let arr = [1, 2, 3, 4];
    expect(binarySearch(arr, 1)).to.equal(0);
  });
  it('should return arr.length - 1 for last elem', function() {
    let arr = [1, 2, 3, 4];
    expect(binarySearch(arr, 4)).to.equal(arr.length - 1);
  });
  it('should work with items inside array', function() {
    let arr = [1, 2, 3, 4];
    expect(binarySearch(arr, 3)).to.equal(2);
  });
  it('should work with custom getter function', function() {
    let arr = [{prop: 1}, {prop: 2}, {prop: 3}, {prop: 4}];
    expect(binarySearch(arr, {prop: 3}, function(item) {
      return item.prop;
    })).to.equal(2);
  });
});
