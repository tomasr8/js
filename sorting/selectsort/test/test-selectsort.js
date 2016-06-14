'use strict';

const testSort = require('../../utils/test-sort.js');
const selectSort = require('../selectsort.js');
const expect = require('chai').expect;

describe('Select sort test', function() {
  it('should work with randomly shuffled arrays', function() {
    testSort(selectSort, 50, 100);
  });
  it('should work with empty array', function() {
    let arr = [];
    selectSort(arr);
    expect(arr).to.deep.equal([]);
  });
  it('should work with negative values', function() {
    let arr = [-2, -3, 0, -1];
    selectSort(arr);
    expect(arr).to.deep.equal([-3, -2, -1, 0]);
  });
  it('should work with custom compare function', function() {
    let arr = [1, 2, 3, 4, 5, 6];
    selectSort(arr, (a, b) => b - a);
    expect(arr).to.deep.equal([6, 5, 4, 3, 2, 1]);
  });
});
