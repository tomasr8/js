'use strict';

function HeapQueue(comparator) {
  let comp = comparator,
      heap = [undefined],
      size = 0;

  function siftUp(index) {
    let parentIndex = Math.floor(index/2);

    if(parentIndex != 0 && comp(heap[index], heap[parentIndex]) > 0){
      swap(index, parentIndex);
      siftUp(parentIndex);
    }
  }

  function swap(index, parentIndex) {
    let temp = heap[index];

    heap[index] = heap[parentIndex];
    heap[parentIndex] = temp;
  }

  function siftDown(index) {
    if(2*index <= size && comp(heap[index], heap[2*index]) < 0 && comp(heap[2*index], heap[2*index + 1]) >= 0){
      swap(index, 2*index);
      siftDown(2*index);
    }else if(2*index + 1 <= size && comp(heap[index], heap[2*index + 1]) < 0 && comp(heap[2*index], heap[2*index + 1]) < 0){
      swap(index, 2*index + 1);
      siftDown(2*index + 1);
    }
  }

  this.offer = function(task) {
    heap.push(task);
    size++;
    siftUp(size);
  };

  this.peek = function() {
    return heap[1];
  };

  this.poll = function() {
    let tmp = heap[1];

    heap[1] = heap.pop();
    size--;
    siftDown(1);

    return tmp;
  };

  this.getLeftChild = function(task) {
    return heap[2*heap.indexOf(task)];
  };

  this.getRightChild = function(task) {
    return heap[2*heap.indexOf(task) + 1];
  };

  this.getHeap = function() {
    return heap;
  };
}

HeapQueue.prototype.toString = function() {
  return this.getHeap().slice(1).reduce( (p, c) => { return p + c.toString() + "\n" }, "" );
};

module.exports = HeapQueue;
