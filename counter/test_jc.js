// unit tests for Counter class implementation from python
var assert = require("assert");
var Counter = require("./js_counter_es5.js");

assert(typeof Counter === "function", "check if Counter is function");
var c1 = new Counter();
assert(typeof c1 === "object", "check if Counter instance is object");
var c2 = new Counter(["a", "A", "a", "b"]);
assert(typeof c2 === "object", "check if Counter instance is object");
var c3 = new Counter({"a": 7, "b": 9});
assert(typeof c3 === "object", "check if Counter instance is object");

//console.log( (c2.add(c3)).items());
//console.log( (new Counter(["c"]).add(new Counter({"c": 2, "j": 77}))).items())
