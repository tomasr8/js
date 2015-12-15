String.prototype.format = function(...data){
  var i = 0;
  return this.replace(/\{\}/g, function(match){
    return data[i++];
  });
};

console.log("{}, {}!".format("Hello", "world"));
