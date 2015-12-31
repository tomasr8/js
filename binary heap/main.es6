'use strict';

let comp = require("./comparator.es6"),
    HeapQ = require("./heapQueue.es6");

let log = console.log.bind(console);

function Task(name, priority) {

  this.getName = function() {
    return name;
  };
  this.getPriority = function() {
    return priority;
  };
}

Task.prototype.toString = function() {
  return (this.getName() + "  --> " + this.getPriority());
};

let t1 = new Task("t1", 1);
let t2 = new Task("t2", 2);
let t3 = new Task("t3", 3);
let t4 = new Task("t4", 4);
let t5 = new Task("t5", 5);

let q = new HeapQ(comp);

q.offer(t1);
q.offer(t2);
q.offer(t3);
q.offer(t4);
q.offer(t5);

log(q.toString());

log(q.getLeftChild(t5).toString());
log(q.getRightChild(t5).toString());
log("\n");
log(q.getLeftChild(t4).toString());
log(q.getRightChild(t4).toString());
log("\n");
log(q.poll().toString());
log(q.poll().toString());
log(q.poll().toString());
log(q.poll().toString());
log(q.poll().toString());






















//comment
