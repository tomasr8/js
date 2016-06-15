'use strict';

module.exports = function(arr, elem, get) {
  get = get || ((val) => val);
  return binarySearch(arr, elem, 0, arr.length, get);
};

function binarySearch(arr, elem, start, end, get) {
  if (start >= end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);

  if (get(elem) === get(arr[mid])) {
    return mid;
  } else if (get(elem) < get(arr[mid])) {
    return binarySearch(arr, elem, start, mid - 1, get);
  } else {
    return binarySearch(arr, elem, mid + 1, end, get);
  }
}
