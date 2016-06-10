'use strict';

if (!String.prototype.format) {
  String.prototype.format = function format(...data) {
    let i = 0;
    return this.replace(/\{\}/g, function() {
      return data[i++];
    });
  };
}
