'use strict';

/*
 * <Grammar>
 * json::= string | number | primitive | array | object
 * object::= '{}' | '{' string ':' json {',' string ':' json} '}'
 * array::= '[]' | '[' json {',' json} ']'
*/

(function(exports) {
  exports.parse = parse;

  function parse(tokenized) {
    let index = 0;
    let curr = tokenized[index];


    function consume(type = tokenized[index].type) {
      if (index < tokenized.length && tokenized[index].type === type) {
        curr = tokenized[++index];
      } else {
        throw new SyntaxError("Uknown syntax: " + curr.type);
      }
    }


    function parseElem() {
      if (curr.type === "string" || curr.type === "number" || curr.type === "primitive") {
        let ret = curr.value;
        consume();
        return ret;
      } else {
        return parseJSON();
      }
    }

    function parseArray() {
      if (curr.type === "]") {
        return [];
      }

      let elems = [];
      elems.push(parseElem());
      while (curr.type === ",") {
        consume(",");
        elems.push(parseElem());
      }
      return elems;
    }

    function parseObject() {
      if (curr.type === "}") {
        return {};
      }

      let obj = {};

      let key = curr.value;
      consume("string");
      consume(":");
      obj[key] = parseJSON();
      while (curr.type === ",") {
        consume(",");
        key = curr.value;
        consume("string");
        consume(":");
        obj[key] = parseJSON();
      }

      return obj;
    }

    function parseJSON() {
      let ret;

      if (curr.type === "[") {
        consume("[");
        ret = parseArray();
        consume("]");
      } else if (curr.type === "{") {
        consume("{");
        ret = parseObject();
        consume("}");
      } else if (curr.type === "string" || curr.type === "number" || curr.type === "primitive") {
        ret = parseElem();
      } else {
        throw new SyntaxError("Unknown syntax: " + curr.type);
      }
      return ret;
    }

    return parseJSON(tokenized);
  }

})(typeof window === "object" ? window : exports);
