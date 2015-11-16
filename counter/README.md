### Javascript implementation of Python's collections.Counter
___



##### Instantiate:

```javascript
var c = new Counter(["a", "b", "a"]);
c.items();
// {"a": 2, "b": 1}
c.length()
// 2

var d = new Counter({"a": 2, "b": 1});
d.items();
// {"a": 2, "b": 1}
d.length()
// 2

var e = new Counter();
e.items();
// {}
e.length()
// 0
```


##### Change values:
```javascript
var c = new Counter({"a": 77, "b": 12});

c.update("b", 5);
c.get("b");
// 17
c.update("b", -10);
c.get("b");
// 7

c.set("xyz", 56);
c.get("xyz");
// 56
c.del("xyz");
c.get("xyz");
// 0

c.get("value");
// 0

c.update("a", 5).update("a", -2).set("new val", 40).del("b");

```

##### Add Counters together:
```javascript
var c = new Counter([1, 1, 1, 2, 2, 3]);
var d = new Counter([4, 4, 2, 2, 3, 1]);

var combined = c.add(d);
combined.items();
// {"1": 4, "2": 4, "4": 2, "3": 2}
```
Just like get, set, del and update, the add method can be chained aswell.


##### Utility:
```javascript
var c = new Counter({"abc": 20, "xyz": 10, "def": 15, "mno": 4});
c.sum();
// 49

c.mostCommon(2)
// [["abc", 20], ["def", 15]]

for(var item of c){
    console.log(item);
    // ["abc", 20]
    // ["def", 15]
    // ["xyz", 10]
    // ["mno", 4]
}
```










