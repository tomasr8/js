'use strict';

const expect = require('chai').expect;

module.exports = testSort;

function testSort(sort, iterations = 100, size = 20) {
  let testArray = [];
  let sortedArray = [];

  for (let i = 1; i <= size; i++) {
    testArray.push(i);
    sortedArray.push(i);
  }

  for (let i = 0; i < iterations; i++) {
    shuffle(testArray);
    sort(testArray);
    expect(testArray).to.deep.equal(sortedArray);
  }

}

function swap(arr, a, b) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

function shuffle(arr) {
  let randIndex;
  for (let i = 0; i < arr.length; i++) {
    randIndex = Math.floor(Math.random() * arr.length);
    swap(arr, i, randIndex);
  }
}
