'use strict';

const readline = require("readline-sync");
const log = console.log.bind(console);

(function(exports) {

  exports.evaluate = evaluate;

  const memory = [0];
  let p = 0;
  let stdout = [];

  const ops = {
    "+": () => {
      memory[p]++;
    },
    "-": () => {
      memory[p]--;
    },
    ">": () => {
      if (++p === memory.length) {
        memory.push(0);
      }
    },
    "<": () => {
      if (--p < 0) {
        throw new Error("Negative pointer value");
      }
    },
    ".": () => {
      stdout.push(String.fromCharCode(memory[p]));
      //log("Program output:", String.fromCharCode(memory[p]));
    },
    ",": () => {
      memory[p] = parseInt(readline.question(">.. "), 10);
    }
  };

  function evaluate(ast) {
    ast.forEach(node => {
      if (node.type !== "block") {
        ops[node.type]();
      } else {
        while (memory[p]) {
          evaluate(node.instructions);
        }
      }
    });

    return { p, memory, stdout };
  }
})(typeof window === "object" ? window : module.exports);
