'use strict';

module.exports = bubbleSort;

function swap(arr, a, b) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

function bubbleSort(arr, compare) {
  compare = compare || ((a, b) => a - b);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length - i; j++) {
      if (compare(arr[j - 1], arr[j]) > 0) {
        swap(arr, j - 1, j);
      }
    }
  }
}
