"use strict";

/**
 * Creates a DAG.
 * @param {number} levels - how tall the dag should be
 * @param {number} rankCount - how many vertices per level
 * @param {number} density - how dense the graph should be, 0=lowest, 1=highest
 *
 * @return {Array} adjacencyList - list of edges originiating from each vertex
 */
module.exports = function(levels = 2, rankCount = 2, density = 0.5) {
  let nodeCount = 0;
  const adjacencyList = [];

  for(let i = 0; i < levels; i++) {
    for(let j = 0; j < rankCount; j++) {
      let nextNode = nodeCount + 1;

      for(let k = 0; k < nodeCount; k++) {
        if(Math.random() > (1 - density)) {
          adjacencyList[k].push(nextNode);
        }
      }
      nodeCount++;
      adjacencyList.push([]);
    }
  }

  return adjacencyList;
};
