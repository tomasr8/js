'use strict';

const readline = require("readline-sync");
const parse = require("./parser.js").parse;
const lex = require("./lexer.js").lex;
const evaluate = require("./interpreter.js").evaluate;
const log = console.log.bind(console);


while(true) {
  const code = readline.question("repl> ");

  if(code === "exit") {
    break;
  }

  const tokens = lex(code);
  const ast = parse(tokens);
  const metaData = evaluate(ast);
  log("Program output>", metaData.stdout.join(""));
  log("--------------");
  log({ "pointer": metaData.p, "memory": metaData.memory});
}
