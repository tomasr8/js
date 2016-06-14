'use strict';

module.exports = selectSort;

function swap(arr, a, b) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

function selectSort(arr, compare) {
  compare = compare || ((a, b) => a - b);

  for (var i = 0; i < arr.length; i++) {

    let minIndex = i;

    for (var j = i; j < arr.length; j++) {
      if (compare(arr[j], arr[minIndex]) < 0) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
}
