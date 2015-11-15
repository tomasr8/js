// Javascript implementation of 'Counter' class from python's collection library
function Counter(iterable){

    var data = {};
    iterable = (iterable === undefined ? [] : iterable);

    if(iterable.constructor == Array){

        iterable.forEach(c => {
            if(data[c] === undefined){
                data[c] = 1;
            }else{
                data[c]++;
            }
        });

    }else if(iterable.constructor === Object){

        data = iterable;

    }else{

        throw new Error("Must be iterable or undefined");

    }

    this.get = (item) => {
        if(data[item] === undefined){
            return 0;
        }else{
            return data[item];
        }
    };

    this.set = (item, amount) => {
        if(Number.isInteger(amount)){
            data[item] = amount;
        }else{
            throw new Error("Must be an integer");
        }

    };

    this.update = (item, amount) => {
        if(Number.isInteger(amount)){
            data[item] += amount;
        }else{
            throw new Error("Must be an integer");
        }

    };

    this.del = (item) => {
        var temp = this.get(item);
        delete data[item];
        return temp;
    };

    this.add = (counter) => {
        var o = {};
        Object.assign(o, data);
        for(var key in counter.items()){
            if(o[key] === undefined){
                o[key] = counter.items()[key];
            }else{
                o[key] += counter.items()[key];
            }
        }
        return new Counter(o);
    };

    this.items = () => {
        return data;
    };

}

module.exports = Counter;

var c1 = new Counter();
c1.set("abc", 12);
console.log(c1.items());
c1.set("abc", 126);
console.log(c1.items());
var c2 = new Counter(["aa","aa","bb","A","a"]);
var c3 = new Counter({"a": 7, "b": 9});
console.log( (c2.add(c3)).items());
console.log( (new Counter(["c"]).add(new Counter({"c": 2, "j": 77}))).items())
