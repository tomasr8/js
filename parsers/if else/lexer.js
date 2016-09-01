'use strict';

(function(exports) {
  exports.lex = lex;

  function lex(str) {
    str = str.replace(/\s+/g, "");

    let tokenized = [];
    let match = null;

    while (str !== "") {
      if ((match = str.match(/^(?:elseif|if|else)/)) !== null) {
        tokenized.push({ type: match[0] });

      } else if ((match = str.match(/^\(/)) !== null) {
        tokenized.push({ type: "(" });

      } else if ((match = str.match(/^\)/)) !== null) {
        tokenized.push({ type: ")" });

      } else if ((match = str.match(/^\{/)) !== null) {
        tokenized.push({ type: "{" });

      } else if ((match = str.match(/^\}/)) !== null) {
        tokenized.push({ type: "}" });

      } else {
        throw new SyntaxError("Unknown syntax: " + str[0]);
      }
      str = str.slice(match[0].length);
    }

    return tokenized;
  }
})(typeof window === "object" ? window : exports);
