'use strict';

module.exports = function(arr, compare) {
  compare = compare || ((a, b) => a - b);

  quickSort(arr, 0, arr.length - 1, compare);
};

function quickSort(arr, start, end, compare) {

  if (end - start < 1) {
    return;
  }

  const pivot = arr[start];
  let il = start;
  let ir = end;

  while (il <= ir) {
    while (compare(arr[il], pivot) < 0) {
      il++;
    }
    while (compare(arr[ir], pivot) > 0) {
      ir--;
    }

    if (il <= ir) {
      swap(arr, il, ir);
      il++;
      ir--;
    }
  }

  quickSort(arr, start, ir, compare);
  quickSort(arr, il, end, compare);
}

function swap(arr, a, b) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
