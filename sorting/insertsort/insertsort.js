'use strict';

module.exports = insertSort;

function insertSort(arr, compare) {
  compare = compare || ((a, b) => a - b);

  for (var i = 1; i < arr.length; i++) {
    if (compare(arr[i], arr[i - 1]) < 0) {

      const current = arr[i];
      let index = i;

      while (index > 0 && compare(current, arr[index - 1]) < 0) {
        arr[index] = arr[index - 1];
        index--;
      }

      arr[index] = current;
    }
  }
}
