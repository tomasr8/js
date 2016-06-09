'use strict';

module.exports = format;

function format(...data){
  let i = 0;
  return this.replace(/\{\}/g, function(match){
    return data[i++];
  });
}

if(!String.prototype.format) {
  String.prototype.format = format;
}
