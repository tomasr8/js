'use strict';

module.exports = parse;

const log = console.log.bind(console);


function parse(tokenized) {
  let index = 0;
  let curr = tokenized[index];


  function consume(type = tokenized[index].type) {
    if (index < tokenized.length && tokenized[index].type === type) {
      curr = tokenized[++index];
    } else {
      log(index, curr);
      throw new SyntaxError("Uknown syntax");
    }
  }


  function parseBlock() {
    consume("{");
    let ast = {};
    if (curr.type !== "}") {
      ast = parseIf();
    }
    consume("}");
    return ast;
  }

  function parseArguments() {
    consume("(");
    consume(")");
    return ["args"];
  }

  function parseIf() {
    let ast = {};

    if (curr.type === "if") {
      consume("if");
      ast.type = "if-elseif-else branch";
      ast.if = [];
      ast.elseif = [];
      ast.else = [];
      ast.if.push({ args: parseArguments(), block: parseBlock() });

      while (curr && curr.type === "elseif") {
        consume("elseif");
        ast.elseif.push({ args: parseArguments(), block: parseBlock() });
      }

      if (curr && curr.type === "else") {
        consume("else");
        ast.else.push({ block: parseBlock() });
      }
    }

    return ast;
  }

  return parseIf(tokenized);
}
