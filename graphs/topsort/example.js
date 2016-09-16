"use strict";

const dag = require("./dag");
const topSort = require("./topsort");
const log = console.log.bind(console);

const graph = dag(1, 7, 0.4);

/*
to create a cycle:
graph[0].push(1);
graph[1].push(0); --> topSort() will throw a TypeError
*/

log(graph);
log(topSort(graph));
