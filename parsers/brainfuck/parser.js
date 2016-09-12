'use strict';


(function(exports) {
  exports.parse = parse;
  //const log = console.log.bind(console);

  const literals = {
    "+": true,
    "-": true,
    ".": true,
    ",": true,
    ">": true,
    "<": true
  };

  function parse(tokens) {
    let index = 0;
    let curr = tokens[index];

    function consume(type) {
      if(index >= tokens.length) {
        throw new SyntaxError("End of program reached");
      }

      if(type && tokens[index].type !== type) {
        throw new SyntaxError("Uknown syntax: " + curr);
      }

      curr = tokens[++index];
    }


    return (function _parse() {
        let ast = [];
        while (curr && curr.type !== "]") {

          if (literals[curr.type]) {
            ast.push(curr);
            consume();
          } else if (curr.type === "[") {
            consume("[");
            ast.push({ type: "block", instructions: _parse() });
            consume("]");
          }
        }
        return ast;
      })();
  }

})(typeof window === "object" ? window : module.exports);
