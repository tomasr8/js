'use strict';

module.exports = function(arr, compare) {
  compare = compare || ((a, b) => a - b);

  mergeSort(arr, 0, arr.length, compare);
};

function mergeSort(arr, start, end, compare) {

  if (end - start < 2) {
    return;
  }

  const mid = Math.floor((start + end) / 2);

  mergeSort(arr, start, mid, compare);
  mergeSort(arr, mid, end, compare);
  merge(arr, start, mid, end, compare);
}

function merge(arr, start, mid, end, compare) {
  let il = 0;
  let ir = 0;
  const left = arr.slice(start, mid);
  const right = arr.slice(mid, end);


  let i = start;
  while (il < left.length && ir < right.length) {
    if (compare(left[il], right[ir]) <= 0) {
      arr[i++] = left[il++];
    } else {
      arr[i++] = right[ir++];
    }
  }

  while (il < left.length) {
    arr[i++] = left[il++];
  }
  while (ir < right.length) {
    arr[i++] = right[ir++];
  }
}
