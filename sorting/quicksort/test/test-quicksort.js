'use strict';

const testSort = require('../../utils/test-sort.js');
const quickSort = require('../quicksort.js');
const expect = require('chai').expect;

describe('Quick sort test', function() {
  it('should work with randomly shuffled arrays', function() {
    testSort(quickSort, 5000, 100);
  });
  it('should work with empty array', function() {
    let arr = [];
    quickSort(arr);
    expect(arr).to.deep.equal([]);
  });
  it('should work with negative values', function() {
    let arr = [-2, -3, 0, -1];
    quickSort(arr);
    expect(arr).to.deep.equal([-3, -2, -1, 0]);
  });
  it('should work with duplicate values', function() {
    let arr = [2, 3, 4, 5, 2];
    quickSort(arr);
    expect(arr).to.deep.equal([2, 2, 3, 4, 5]);
  });
  it('should work with custom compare function', function() {
    let arr = [1, 2, 3, 4, 5, 6];
    quickSort(arr, (a, b) => b - a);
    expect(arr).to.deep.equal([6, 5, 4, 3, 2, 1]);
  });
});
