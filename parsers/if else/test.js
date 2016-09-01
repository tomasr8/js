'use strict';

const util = require("util");
const lex = require("./lexer.js").lex;
const parse = require("./parser.js").parse;
const log = console.log.bind(console);


const str = `
if(){
  if(){}elseif(){}else{}
}elseif(){
  if(){}else{}
}elseif(){
  if(){}
}else{
  if(){}elseif(){}
}`;


log(lex(str));
log(util.inspect(parse(lex(str)), false, null));
