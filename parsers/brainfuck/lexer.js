'use strict';

(function(exports) {
  exports.lex = lex;

  function lex(str) {
    str = str.replace(/\s+/g, "");
    str = str.replace(/[^\+\-\.\,\[\]><]/g, "");

    let tokens = str.split("").map(t => { return { type: t }; });
    
    return tokens;
  }

})(typeof window === "object" ? window : module.exports);
