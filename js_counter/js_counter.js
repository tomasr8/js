// Counter class from python
function Counter(iterable){

    var data = {};

    this.get = (item) => {
        if(data[item] === undefined){
            return 0;
        }else{
            return data[item];
        }
    };

    this.set = (item, amount) => {
        if(typeof amount === "number"){
            data[item] = amount;
        }else{
            throw new Error("Must be a number");
        }

    };

    this.add = (counter) => {
        var o = {};
        Object.assign(o, this.items());
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

    if(iterable === undefined){

        return this;

    }else if(iterable.constructor == Array){

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

}

module.exports = Counter;

//var c1 = new Counter();
//var c2 = new Counter(["aa","aa","bb","A","a"]);
//var c3 = new Counter({"a": 7, "b": 9});

//console.log( (c2.add(c3)).items());
//console.log( (new Counter(["c"]).add(new Counter({"c": 2, "j": 77}))).items())