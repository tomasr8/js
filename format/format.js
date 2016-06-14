'use strict';

module.exports = function format(...data) {
  let i = 0;
  return this.replace(/\{\}/g, function() {
    return data[i++];
  });
};
