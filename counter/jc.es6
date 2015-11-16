// Javascript implementation of 'Counter' class from python's collection library
function Counter(iterable) {

    iterable = (iterable === undefined ? [] : iterable);

    this._data = {};

    if(iterable.constructor == Array){
        iterable.forEach(c => {
            if(typeof c !== 'string' && !(c.constructor == String) && !(Number.isInteger(c))){
                throw new Error("keys/items must be strings/integers");
            }

            if(this._data[c] === undefined){
                this._data[c] = 1;
            }else{
                this._data[c]++;
            }
        });
    }else if(iterable.constructor === Object){
        this._data = iterable;
    }else{
        throw new Error("Must be iterable or undefined");
    }
}

Counter.prototype.get = function(item) {
  if(this._data[item] === undefined){
      return 0;
  }else{
      return this._data[item];
  }
};

Counter.prototype.set = function(item, amount) {
  if(Number.isInteger(amount)){
      this._data[item] = amount;
  }else{
      throw new Error("Must be an integer");
  }
  return this;
};

Counter.prototype.update = function(item, amount) {
    if(Number.isInteger(amount)){
        this._data[item] = this._data[item] || 0;
        this._data[item] += amount;
    }else{
        throw new Error("Must be an integer");
    }
    return this;
};

Counter.prototype.del = function(item) {
    delete this._data[item];
    return this;
};

Counter.prototype.add = function(counter) {
    var o = {};
    Object.assign(o, this._data);
    for(var key in counter.items()){
        if(o[key] === undefined){
            o[key] = counter.get(key);
        }else{
            o[key] += counter.get(key);
        }
    }
    return new Counter(o);
};

Counter.prototype.items = function() {
  return this._data;
};

Counter.prototype.length = function() {
  return Object.keys(this._data).length;
};

Counter.prototype.sum = function() {
  var that = this;
  return Object.keys(this._data).reduce( (p, c) => {
    return p + that._data[c];
  }, 0);
};

Counter.prototype.mostCommon = function(amount) {
    if(!Number.isInteger(amount) || amount < 0){
        throw new Error("Must be an integer >= 0");
    }
    var keys = Object.keys(this._data);
    return keys.sort( (a,b) => { return this._data[b] - this._data[a]; })
               .slice(0, amount)
               .map( c => {
                   return [c, this._data[c]];
               });
};

Counter.prototype[Symbol.iterator] = function* () {
  var keys = Object.keys(this._data);
  keys.sort( (a,b) => { return this._data[b] - this._data[a]; });
  for(var item of keys){
    yield [item, this._data[item]];
  }
};

module.exports = Counter;
