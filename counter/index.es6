//var Counter = require('./jc.es6');
var Counter = require('./jc2.es6');

var c1 = new Counter(["aa","aa","bb","A","a", "A", "A"]);
var c2 = new Counter([1, 1, 36, 789, 45, 45, 45, "das", "das", "das", "das"]);

console.log(c1.items());
console.log(c2.items());

//console.log(c1.get("A"));
//console.log(c2.get("bb"));

//c1.set("hey", 456);
//c2.set("bye", 15555);

//console.log(c1.get("hey"));
//console.log(c2.get("bye"));

//c1.update("A", 21);
//c2.update("bb", -7);

//console.log(c1.get("A"));
//console.log(c2.get("bb"));

//console.log(c1.del("aa"));
//console.log(c2.del("bb"));

console.log(c1.length());
console.log(c2.length());

//console.log(c1.set("test", 112).update("test", 8).update("test", -20).del("test").set("lol", -156).add(c2).items());

console.log(c1.mostCommon(2));
console.log(c2.mostCommon(15));

console.log(c1.sum());
console.log(c2.sum());
