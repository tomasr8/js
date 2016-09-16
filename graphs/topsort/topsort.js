"use strict";

module.exports = topSort;

/**
 *
 * @param {Array} graph - graph adjacency list
 *
 * @return {Array} stack - topologically sorted array of vertices
 */
function topSort(graph) {
  const visited = Array(graph.length).fill(0);
  const stack = [];

  graph.forEach((neigbors, v) => {
    if (visited[v] === 0) {
      topSortVertex(graph, v, visited, stack);
    }
  });

  return stack;
}

function topSortVertex(graph, v, visited, stack) {
  visited[v] = 1; // currently being processed

  graph[v].forEach(u => {
    if(visited[u] === 1) { // visted the same vertex twice in the same branch
      throw new TypeError("Graph has to be DAG");
    }
    if (visited[u] === 0) {
      topSortVertex(graph, u, visited, stack);
    }
  });

  visited[v] = 2; // done processing
  stack.unshift(v);
}
