'use strict';

const fs = require("fs");
const util = require("util");
const lex = require("./lexer.js");
const parse = require("./parser.js");
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
