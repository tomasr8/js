### Javascript implementation of Python's collections.Counter

#### Usage:

```javascript
var c = new Counter(["a", "b", "a"]);
c.items()
// {"a": 2, "b": 1}
```

```javascript
c = new Counter({"a": 77, "b": 12});
c.items()
// {"a": 77, "b": 12}
```

```javascript
c = new Counter({"a": 77, "b": 12});
c.get("a");
// 77
c.set("c", 10);
c.get("c");
// 10
c.update("c", 5);
c.get("c");
// 15
```

```javascript
c1 = new Counter({"a": 77, "b": 12});
c1 = new Counter(["a", "b", "b", "c"]);
c3 = c1.add(c2);
c3.items()
// {"a": 78, "b": 14, "c": 1}
```