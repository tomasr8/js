'use strict';

const expect = require("chai").expect;
const lex = require("../lexer.js").lex;
const parse = require("../parser.js").parse;

describe('Lexer test', function() {
  it('should ignore white space', function() {
    const str1 = "++[--,.><]"
    const str2 = str1 + " \n  ";
    expect(lex(str1)).to.deep.equal(lex(str2));
  });

  it('should ignore unknown symbols', function() {
    const str1 = "+-><[],.";
    const str2 = str1 + "abcde";
    expect(lex(str1)).to.deep.equal(lex(str2));
  });

  it('should work with empty program', function() {
    const str = "";
    expect(lex(str)).to.deep.equal([]);
  });
});

describe('Parser test', function() {
  it('should work simple instructions', function() {
    const str = "+>-<";
    const tokens = lex(str);
    expect(parse(tokens)).to.deep.equal(lex(str));
  });

  it('should throw a SyntaxError for invalid syntax', function() {
    const str = "[";
    const tokens = lex(str);
    expect(() => { parse(tokens); }).to.throw(SyntaxError);
  });
});
