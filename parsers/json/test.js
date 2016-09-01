'use strict';

const util = require("util");
const lex = require("./lexer.js").lex;
const parse = require("./parser.js").parse;
const log = console.log.bind(console);


const str = '[-6, 1.1e-3, { "abc": [false, [{}, 123], 0.56] } ]';
log(lex(str));
log(util.inspect(parse(lex(str)), false, null));
