'use strict';

module.exports = heapSort;

function swap(arr, a, b) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

function siftDown(heap, index, stop, compare) {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let max = index;

  if (left < stop && compare(heap[index], heap[left]) < 0) {
    max = left;
  }

  if (right < stop && compare(heap[max], heap[right]) < 0) {
    max = right;
  }

  if (max !== index) {
    swap(heap, index, max);
    siftDown(heap, max, stop, compare);
  }
}

function createHeap(arr, compare) {
  for (let i = arr.length - 1; i >= 0; i--) {
    siftDown(arr, i, arr.length, compare);
  }
}

function heapSort(arr, compare) {
  compare = compare || ((a, b) => a - b);
  createHeap(arr, compare);

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    siftDown(arr, 0, i, compare);
  }
}
