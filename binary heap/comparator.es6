'use strict';

let comparator = function(t1, t2) {
  return (t1.getPriority() - t2.getPriority());
};

module.exports = comparator;
