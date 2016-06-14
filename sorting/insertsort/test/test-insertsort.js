'use strict';

const testSort = require('../../utils/test-sort.js');
const insertSort = require('../insertsort.js');
const expect = require('chai').expect;

describe('Insert sort test', function() {
  it('should work with randomly shuffled arrays', function() {
    testSort(insertSort, 50, 100);
  });
  it('should work with empty array', function() {
    let arr = [];
    insertSort(arr);
    expect(arr).to.deep.equal([]);
  });
  it('should work with negative values', function() {
    let arr = [-2, -3, 0, -1];
    insertSort(arr);
    expect(arr).to.deep.equal([-3, -2, -1, 0]);
  });
  it('should work with custom compare function', function() {
    let arr = [1, 2, 3, 4, 5, 6];
    insertSort(arr, (a, b) => b - a);
    expect(arr).to.deep.equal([6, 5, 4, 3, 2, 1]);
  });
});
