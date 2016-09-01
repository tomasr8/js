'use strict';

(function(exports){
  exports.lex = lex;

  function lex(str) {
    str = str.replace(/\s+/g, "");

    let tokenized = [];
    let match = null;

    while (str !== "") {
      if ((match = str.match(/^(?:null|true|false)/)) !== null) {
        tokenized.push({ type: "primitive", value: eval(match[0]) });

      } else if ((match = str.match(/^"(\w*)"/)) !== null) {
        tokenized.push({ type: "string", value: match[1] });

      } else if ((match = str.match(/^-?(0|[1-9][0-9]*)(\.[0-9]+)?(e-?[0-9]+)?/)) !== null) {
        tokenized.push({ type: "number", value: parseFloat(match[0], 10) });

      } else if ((match = str.match(/^[\[\]\{\}:,]/)) !== null) {
        tokenized.push({ type: match[0] });

      } else {
        throw new SyntaxError("Unknown syntax: " + str[0]);
      }
      str = str.slice(match[0].length);
    }

    return tokenized;
  }

})(typeof window === "object" ? window : exports);
